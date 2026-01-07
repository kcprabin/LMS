import { Router } from "express";
import { getBooks , borrowBook,getBorrowedBooks,history} from "../controllers/student.controller.js";
import { loginInCheck } from "../middleware/auth.middleware.js";

const router = Router()
router.route('/getbooks').get(loginInCheck,getBooks);

router.route('/borrowbook/:bookId').post(loginInCheck,borrowBook);

router.route('/borrowedbooks').get(loginInCheck,getBorrowedBooks);

router.route('/history').get(loginInCheck,history);



export default router