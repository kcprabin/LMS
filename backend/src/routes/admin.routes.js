import { Router } from "express";
import { registerBook,getMembers,getBooks} from "../controllers/admin.controller..js";
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



export default router;
