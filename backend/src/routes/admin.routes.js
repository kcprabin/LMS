import { Router } from "express";
import { registerBook,getMembers,getBooks,deleteProfile,addMember,deleteBook,editBook,getAllIssuedBooks,getAllReturnedBooks,getOverdueBooks,getRecentActivity,getDashboardStats } from "../controllers/admin.controller..js";
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

// Admin dashboard stats and activity routes
router.route('/issued-books').get(loginInCheck,getAllIssuedBooks)
router.route('/returned-books').get(loginInCheck,getAllReturnedBooks)
router.route('/overdue-books').get(loginInCheck,getOverdueBooks)
router.route('/recent-activity').get(loginInCheck,getRecentActivity)
router.route('/dashboard-stats').get(loginInCheck,getDashboardStats)

export default router;
