import express from "express";
const router = express.Router();
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { getAllUsers, getUserById } from "../controllers/user.controller.js";

router.get("/:id", isLoggedIn, getUserById);
router.get("/", isLoggedIn, getAllUsers);

export default router;
