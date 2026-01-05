import { Router } from "express";
import { getBooks , bookBorrow,bookTaken,returnBook} from "../controllers/student.controller.js";
import { loginInCheck } from "../middleware/auth.middleware.js";




const router = Router()

router.route('/getbooks').get(getBooks);


router.route('/borrowbook').post(loginInCheck, bookBorrow);

router.route('/seebook').get(loginInCheck, bookTaken);


router.route('/returnbook').post(loginInCheck, returnBook);
export default router