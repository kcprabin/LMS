import mongoose, { Schema } from "mongoose";


const issueschema = new Schema({
    studentemail: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"  
     },
     problem:{
        type: String,
        required:true
     }
},{timestamps:true})


export const Issue = mongoose.model('issue',issueschema)