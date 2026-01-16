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
    returnedAt:{
        type:Date,
        default:null
    },
    status:{
        type:String,
        enum:["ISSUED","RETURNED"],
        default:"ISSUED"
    },
    history:{
        type:Array,
        default:[]
    }   
},{timestamps:true});

export const Borrow = mongoose.model("borrow",borrowSchema);
   