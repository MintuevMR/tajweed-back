import { Router } from "express";
import bookmarkController from "../controllers/bookmarks.controller"
import { authMiddleware } from "../middleware/auth.middleware.js";


const router = Router()

router.get('/bookmarks/:userId', bookmarkController.getBookmark)
router.post('/bookmarks', authMiddleware, bookmarkController.postBookmark)
router.patch('/bookmarks', authMiddleware, bookmarkController.addBookmark)


export default router;
