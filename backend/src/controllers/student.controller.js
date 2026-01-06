import { asyncHandler } from "../utils/asynchandler.js";
import { Book } from "../models/book.model.js";
import { BooksIssue } from "../models/bookissue.model.js";

export const getBooks = asyncHandler(async (req, res) => {
  try {
    const books = await Book.find();

    return res.status(200).json({
      book: books,
    });
  } catch (error) {
    console.log(error, "Unable to retrive books data ");
  }
});

export const bookBorrow = asyncHandler(async (req, res) => {
  const student = req.user;
  console.log(student);

  const { bookid } = req.body;
  if (!bookid || !student) {
    return res.status(401).json({
      success: false,
      message: "empty feild",
    });
  }

  const existingIssue = await BooksIssue.findOne({
    book: bookid,
    status: "ISSUED",
  });

  if (existingIssue) {
    return res.status(400).json({
      success: false,
      message: "Book already issued",
    });
  }

  if (BooksIssue.status === "ISSUED") {
    return res.status(400).json({
      message: "already issued",
    });
  }
  
   const bookThatIsTaken = await BooksIssue.create({
  book: bookid,
  user: student._id,
  issuedAt: new Date(),
  returnedAt: null,
  status: "ISSUED",
});



  return res.json({
    message: "Book issued successfully",
    data:bookThatIsTaken

  });
});

export const bookTaken  = asyncHandler(
  async(req,res)=>{
    const booktaken = await BooksIssue.find({ 
    user: req.user._id,
    status: "ISSUED" 
  }).populate("book");

    return res.status(201).json({
      success:true,
      books:booktaken
    })
  }
)
export const returnBook = asyncHandler(async (req, res) => {
  const { issueId } = req.body;

  if (!issueId) {
    return res.status(400).json({
      success: false,
      message: "Issue ID is required"
    });
  }

  const updatedIssue = await BooksIssue.findByIdAndUpdate(
    issueId,
    {
      $set: {
        status: "RETURNED",
        returnedAt: new Date()
      }
    },
    { new: true }
  );

  if (!updatedIssue) {
    return res.status(404).json({
      success: false,
      message: "Issue record not found"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Book returned successfully",
    data: updatedIssue
  });
});
