import { Router } from "express";
import { registerBook,getMembers,getBooks,deleteProfile,addMember,deleteBook,editBook} from "../controllers/admin.controller..js";
import { upload } from "../middleware/multer.middleware.js";
import { loginInCheck } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/registerbook").post(
  loginInCheck,
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  registerBook
);
router.route("/members").get(loginInCheck,getMembers)

router.route('/getbooks').get(loginInCheck,getBooks)

router.route('/deleteuser/:email').delete(loginInCheck,deleteProfile)

router.route('/addmember').post(loginInCheck,addMember)

router.route('/deletebook/:bookId').delete(loginInCheck,deleteBook)

router.route('/editbook/:bookId').put(loginInCheck,editBook)

export default router;
