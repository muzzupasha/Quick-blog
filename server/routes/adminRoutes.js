import express from 'express';
import { adminLogin, approveCommentByID, deleteCommentByID, getAllComments, getBlogsAdmin, getDashboard } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';


const adminRouter = express.Router();

adminRouter.post('/login' , adminLogin)
adminRouter.get('/comments' ,auth, getAllComments)
adminRouter.get('/blogs' ,auth, getBlogsAdmin)
adminRouter.post('/delete-comment' ,auth, deleteCommentByID)
adminRouter.post('/approve-comment' ,auth, approveCommentByID)
adminRouter.get('/dashboard' ,auth, getDashboard)

export default adminRouter;