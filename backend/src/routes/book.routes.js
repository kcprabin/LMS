import { Router } from "express";
import { registerBook ,editbook} from "../controllers/book.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { loginInCheck } from "../middleware/auth.middleware.js";
import { adminCheck } from "../middleware/admin.middleware.js";

const router = Router();

router.route("/registerbook").post( 
    loginInCheck , adminCheck,
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  registerBook
);
router.route("/editbooks").post(
    loginInCheck,adminCheck,editbook)


export default router;
