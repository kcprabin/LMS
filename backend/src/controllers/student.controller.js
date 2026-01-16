import { asyncHandler } from "../utils/asynchandler.js";
import { Book } from "../models/book.model.js";
import { Borrow } from "../models/borrow.model.js";
import { User } from "../models/user.model.js";


const getBooks = asyncHandler(async (req, res) => {
  try {
    const books = await Book.find();

    return res.status(200).json({
      success: true,
      Books: books,
    });
  } catch (error) {
    console.log(error, "Unable to retrive books data ");
    return res.status(500).json({
      success: false,
      message: "Failed to fetch books"
    });
  }
});

const borrowBook = asyncHandler(async (req, res) => {
  const { bookId } = req.params;
  const userId = req.user._id;  
  
  const book = await Book.findById(bookId);
  if(!book){
    return res.status(404).json({
      success: false,
      message: "Book not found",
    });
  }

  const alreadyBorrowed = await Borrow.findOne({
    bookId: bookId,
    studentId: userId,
    status: "ISSUED"
  });

  if(alreadyBorrowed){
    return res.status(400).json({
      success: false,
      message: "You have already borrowed this book",
    });
  }

  try {
    const borrow = await Borrow.create({
      bookId: book._id,
      studentId: userId,
      borrowDate: new Date(),
      returnDate: new Date(Date.now() + 14*24*60*60*1000),
      status: "ISSUED",
      history: []
    });

    const populatedBorrow = await Borrow.findById(borrow._id).populate('bookId');

    return res.status(201).json({ 
      success: true,
      message: "Book borrowed successfully",
      borrow: populatedBorrow
    }); 
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to borrow book",
      error: error.message
    });
  }
})

const returnBook = asyncHandler(async (req, res) => {
  const { borrowId } = req.body;
  const userId = req.user._id;

  if(!borrowId){
    return res.status(400).json({
      success: false,
      message: "Borrow ID is required"
    });
  }

  const borrow = await Borrow.findById(borrowId);
  if(!borrow){
    return res.status(404).json({
      success: false,
      message: "Borrow record not found"
    });
  }

  if(borrow.studentId.toString() !== userId.toString()){
    return res.status(403).json({
      success: false,
      message: "You can only return your own borrowed books"
    });
  }

  if(borrow.status === "RETURNED"){
    return res.status(400).json({
      success: false,
      message: "This book has already been returned"
    });
  }

  try {
    borrow.status = "RETURNED";
    borrow.returnedAt = new Date();
    await borrow.save();

    const populatedBorrow = await Borrow.findById(borrow._id).populate('bookId');

    return res.status(200).json({
      success: true,
      message: "Book returned successfully",
      borrow: populatedBorrow
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to return book",
      error: error.message
    });
  }
})

const getBorrowedBooks = asyncHandler(async (req, res) => { 
  try {
    const userId = req.user._id;
    const borrowedBooks = await Borrow.find({ 
      studentId: userId,
      status: "ISSUED"
    }).populate('bookId');
    
   
    const transformedBooks = borrowedBooks.map(borrow => ({
      _id: borrow._id,
      book: borrow.bookId,
      issuedAt: borrow.borrowDate,
      returnDate: borrow.returnDate,
      status: borrow.status
    }));
    
    return res.status(200).json({
      success: true,
      books: transformedBooks
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch borrowed books",
      error: error.message
    });
  }
});

const history = asyncHandler(async (req, res) => { 
  try {
    const userId = req.user._id;
    const borrowHistory = await Borrow.find({ studentId: userId }).populate('bookId').sort({ createdAt: -1 });
    
    // Transform the response to match frontend expectations
    const transformedBooks = borrowHistory.map(borrow => ({
      _id: borrow._id,
      book: borrow.bookId,
      issuedAt: borrow.borrowDate,
      returnDate: borrow.returnDate,
      returnedAt: borrow.returnedAt,
      status: borrow.status,
      updatedAt: borrow.updatedAt
    }));
    
    return res.status(200).json({
      success: true,
      books: transformedBooks
    });  
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch history",
      error: error.message
    });
  }
});

export { getBooks, borrowBook, getBorrowedBooks, history, returnBook };