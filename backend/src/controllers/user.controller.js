import { asyncHandler } from "../utils/asynchandler.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"


const registerUser = asyncHandler(async (req, res) => {
    

    
    //Handle user inputs from frontend as objects 
    const {studentemail , Password} = req.body
    console.log(studentemail)
    console.log(Password)

    // validations of correct format for empty
    if(Object.values({studentemail,Password}).some(data =>String(data)?.trim()=="" )){
        return res.status(400).json({
            message:"Empty feild"
        })
    }
        
    
    // email formatiing check
    const gmailFormat = /^.*@gmail\.com$/;
    if(!gmailFormat.test(studentemail)){
       return res.status(400).json({
        message:"not in format"
       })
    }


    //checking if already exists 
    const userExists = await User.findOne({
        studentemail})

        if(userExists){
        return res.status(409).json({
        messege:"lode23"
       })
     }
     // hashing password
     const hashedPass = await bcrypt.hash(Password,10);
 
     // saving data in database 
    const NewUser =  await User.create({
        studentemail1:studentemail  ,
        password1:Password  
    })

    
    return res.status(201).json({
        messege:"User created",
        user : NewUser
      })

    

      
});


export default registerUser;