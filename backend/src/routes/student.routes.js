import { Router } from "express";
import { getBooks } from "../controllers/student.controller.js";
import { loginInCheck } from "../middleware/auth.middleware.js";




const router = Router()
router.route('/getbooks').get(getBooks);
export default router