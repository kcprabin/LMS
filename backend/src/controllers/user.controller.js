import { asyncHandler } from "../utils/asynchandler.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"

const registerUser = asyncHandler(async (req, res) => {
    // 400 means user error here in this code base

    
    //Handle user inputs from frontend as objects 
    const {studentemail , Password} = req.body

    // validations of correct format for empty
    if(Object.values({studentemail,Password}).some(data =>String(data)?.trim()=="" )){
        return res.status(400).json({
            messege:"Empty feild"
        })
    }
        
    
    // email formatiing check
    const gmailFormat = /^.*@gmail\.com$/;
    if(!gmailFormat.test(studentemail)){
        res.status(400,"Formating must be in form @gmail.com")
    }


    //checking if already exists 
     try {
      
     const userExists = await User.findOne({
        studentemail})

        if(userExists){
        res.status(400,"already exist")
     }
        
     } catch (error) {
        console.log(error)
 
     }
    

     // saving data in database 
    const NewUser = User.create({
        studentemail,
        Password
     })


      return res.status(100).json({
        messege:"User created",
        user : NewUser
      })
});


export {registerUser,
}














































export default registerUser;
