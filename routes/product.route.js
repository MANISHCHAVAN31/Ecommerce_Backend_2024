import express from "express";
const router = express.Router();
import productUpload from "../middlewares/multer.middleware.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { createProduct } from "../controllers/product.controller.js";

router.post("/", isLoggedIn, productUpload.array("product"), createProduct);

export default router;
