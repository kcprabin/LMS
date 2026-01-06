import { asyncHandler } from "../utils/asynchandler.js";
import { Book } from "../models/book.model.js";


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

