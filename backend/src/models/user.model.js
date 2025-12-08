import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

//data model for user Students
const userSchema = new Schema({
    studentemail:{
        type:String,
        requrired:true,
        trim:true,
        index:true,   
    },
    password:{
        type:String,
        requrired:true,
        trim:true
    }
   
  

},{timestamps:true})

// password incryption in data base

userSchema.pre("save",
     function (next) {
        // pass check 
        if(!this.isModified("password"))  return next();

        // hashes password 
        this.password =  bcrypt.hash(this.password,10)
        next();
        
    }
)
// check password code 

userSchema.methods.IsPasswordCorrect() = async function (password) {
    return  await bcrypt.compare(password,this.password)
}

// refresh token baki 
// access token baki 

export const User = mongoose.model("user",userSchema)
