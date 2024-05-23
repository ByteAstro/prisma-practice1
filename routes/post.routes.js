import { Router } from 'express';
import {
    createPost, updatePost,
    fetchPosts, showPost,
    deletePost
} from '../controllers/post.controllers.js';

const router = Router();

router.get("/", fetchPosts);
router.get("/:id", showPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;