import { Router } from 'express'
import userRouter from './user.routes.js'
import postRouter from './post.routes.js'

const router = Router();

router.use("/api/user", userRouter);
router.use("/api/post", postRouter);

export default router;