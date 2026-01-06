import { asyncHandler } from "../utils/asynchandler.js";
import { Book } from "../models/book.model.js";
import { cloudinaryUploader } from "../services/cloudinary.service.js";
import { User } from "../models/user.model.js";

const registerBook = asyncHandler(async (req, res) => {
  const { title, author, publishedDate, publication, description } = req.body;

  // Validation
  if (!title?.trim() || !author?.trim() || !publishedDate?.trim() || !publication?.trim() || !description?.trim()) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }


  const alreadyExists = await Book.findOne({
    title: title.trim(),
    author: author.trim(),
    publication: publication.trim()
  });

  if (alreadyExists) {
    return res.status(400).json({
      success: false,
      message: "Book already exists with same data"
    });
  }


  const bookImage = req.files?.image?.[0]?.path;
  if (!bookImage) {
    return res.status(400).json({
      success: false,
      message: "Book image is required"
    });
  }

  const responseOfCloudinary = await cloudinaryUploader(bookImage);


  const book = await Book.create({
    title: title.trim(),
    author: author.trim(),
    publishedDate: Number(publishedDate),
    publication: publication.trim(),
    description: description.trim(),
    image: responseOfCloudinary
  });


  res.status(201).json({
    success: true,
    message: "Book entry created",
    book
  });
});

const getMembers = asyncHandler(
  async(req,res)=>{

    const users = await User.find().select("-password -refreshtoken");
    if(!users){
      return res.status(401).json({
        message:"unable to retrive data from users"
      })
    }


    res.status(201).json({
      success:true,
      user:users
      
    })

  }
)

const getBooks = asyncHandler(
  async(req,res)=>{
    const books = await Book.find()

    if(!books){
      return res.status(400).json({
        success:false,
        message:"Books not found"
      })
    }

    return res.status(201).json({
      success:true,
      Books:books
    })



  }
)

const deleteProfile = asyncHandler(
  async(req,res)=>{ })  
  
export { registerBook,getMembers, getBooks, deleteProfile };
