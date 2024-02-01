import Product from "../models/product.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { v2 as cloudinary } from "cloudinary";

export const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, unit, category } = req.body;

  if (!name || !description || !price || !unit || !category) {
    throw new ApiError(400, "All information is required");
  }

  const product = await Product.create({
    name: name,
    description: description,
    price: price,
    unit: unit,
    category: category,
    createdBy: req.user._id,
  });

  if (req.files) {
    // save into cloudinary
    //create a folder with product id and save into it

    // cloudinary.uploader.upload(`/tmp/products/`);
  }

  res
    .status(200)
    .json(new ApiResponse(200, product, "Product created successfully"));
});
