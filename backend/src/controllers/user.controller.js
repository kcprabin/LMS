import { asyncHandler } from "../utils/asynchandler.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"

const registerUser = asyncHandler(async (req, res) => {
    //Handle user inputs from frontend
    const [studentemail , Password] = req.body
    // validations of correct format for empty
    if([{studentemail,Password}].some(data =>{data?.trim()=="" })){
        res.status(400,"Empty feild ")
    }


    



});

const loginUser = asyncHandler(
     async (req, res) => {
    // get login data
    const {kuid, password } = req.body;

   // match ku id
    const findUser = await User.findOne({
        kuid:findUserKuid
    })
    if(findUser){
        console.log("okey")
    }
    if(!findUser){
        res.status(400).json({
            message:"no user found"
        })
    }

    const Ismatched = await bcrypt.compare(password,findUser.Password)


    if(!Ismatched){
        return res.status(500).json({
        message:"incorrect password"
       })
    }
    
    if(Ismatched){
       res.status(100).json({
        message:" password correct "
       })
    } 



    
});
export {registerUser,
    loginUser

}














































export default registerUser;
