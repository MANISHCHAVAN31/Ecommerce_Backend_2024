import express from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/category.controller.js";
const router = express.Router();

router.post("/", isLoggedIn, createCategory);
router.put("/:id", isLoggedIn, updateCategory);
router.get("/:id", isLoggedIn, getCategoryById);
router.get("/", isLoggedIn, getAllCategories);
router.delete("/:id", isLoggedIn, deleteCategory);

export default router;
