import { asyncHandler } from "../utils/asynchandler.js";
import { Book } from "../models/book.model.js";
import { Borrow } from "../models/borrow.model.js";


const getBooks = asyncHandler(async (req, res) => {
  try {
    const books = await Book.find();

    return res.status(200).json({
      book: books,
    });
  } catch (error) {
    console.log(error, "Unable to retrive books data ");
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

    Borrow.create({
      bookId: book._id,
      studentId: userId,
      borrowDate: new Date(),
      returnDate : new Date(Date.now() + 14*24*60*60*1000), 
      history: [].push(book._id)
    });
    return res.status(201).json({ 
      success: true,
      message: "Book borrowed successfully",
    }); 
  }
 })

 const getBorrowedBooks = asyncHandler(async (req, res) => { 
  const userId = req.user._id;
  const borrowedBooks = await Borrow.find({ studentId: userId }).populate('bookId');
  return  res.status(200).json({
    borrowedBooks: borrowedBooks});  
  });

const history = asyncHandler(async (req, res) => { 
    const userId = req.user._id;
    const borrowHistory = await Borrow.find({ studentId: userId }).populate('bookId');
    return  res.status(200).json({
      borrowHistory: borrowHistory});  
    });
export { getBooks ,borrowBook, getBorrowedBooks, history };