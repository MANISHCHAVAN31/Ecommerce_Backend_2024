import express from "express";
const router = express.Router();

import AuthRoutes from "./routes/auth.route.js";

router.use("/auth", AuthRoutes);

export default router;
