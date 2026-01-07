import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
        required:true,
    },
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    borrowDate:{
        type:Date,
        required:true,
    },
    returnDate:{
        type:Date,
        required:true,  
    },
    history:{
        type:Array,
        default:[]
    }   
},{timestamps:true});

export const Borrow = mongoose.model("borrow",borrowSchema);
   