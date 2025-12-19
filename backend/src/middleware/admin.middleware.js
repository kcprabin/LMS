import { asyncHandler } from "../utils/asynchandler.js";
import { User } from "../models/user.model.js";

export const adminCheck = asyncHandler(
    async(req,res,next)=>{
    const isAdmin = User.findById(req.user._id)
   

    if(!isAdmin){
        return res.status(300).json({
            success:false,
            message:"No user found"
        })
    }

    if(!(isAdmin.role=="admin")){
        res.status(300).json({
            success:false,
            message:"not admin cannot edit and register"
        })
    }

    next()

    }
)