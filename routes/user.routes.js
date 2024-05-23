import { Router } from 'express';
import {
    createUser, updateUser,
    fetchUsers, showUser,
    deleteUser
} from '../controllers/user.controllers.js';

const router = Router();

router.get("/", fetchUsers);
router.get("/:id", showUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;