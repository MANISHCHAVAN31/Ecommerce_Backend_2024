import express from "express";
const router = express.Router();

import AuthRoutes from "./routes/auth.route.js";
import UserRoutes from "./routes/user.route.js";
import CategoryRoutes from "./routes/category.route.js";
import ProductRoutes from "./routes/product.route.js";

router.use("/auth", AuthRoutes);
router.use("/user", UserRoutes);
router.use("/category", CategoryRoutes);
router.use("/product", ProductRoutes);

export default router;
