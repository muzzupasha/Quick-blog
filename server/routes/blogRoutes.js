import express from "express";
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlog, getBlogById, getBlogComments, toggelPublish , } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add" ,upload.single('image'), auth, addBlog);
blogRouter.get("/all" , getAllBlog)
blogRouter.get("/:blogId" ,getBlogById)
blogRouter.post("/delete" , auth, deleteBlogById)
blogRouter.post("/toggel-publish" ,auth, toggelPublish)
blogRouter.post('/add-comments', addComment)
blogRouter.post('/comments', getBlogComments)
blogRouter.post('/generate' , auth , generateContent)


export default blogRouter;