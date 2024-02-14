import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import Category from "../models/category.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import User from "../models/user.model.js";

export const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new ApiError(400, "All information is required");
  }

  const category = await Category.create({
    name: name.toLowerCase(),
    createdBy: req.user._id,
  });

  res.status(200).json(new ApiResponse(200, category));
});

export const updateCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const id = req.params.id;

  const category = await Category.findByIdAndUpdate(
    { _id: id },
    { name: name.toLowerCase() },
    { new: true }
  );

  res.status(200).json(new ApiResponse(200, category));
});

export const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.status(200).json(new ApiResponse(200, categories));
});

export const getCategoryById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const category = await Category.findById({ _id: id });
  res.status(200).json(new ApiResponse(200, category));
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await Category.findByIdAndDelete({ _id: id });
  res
    .status(200)
    .json(new ApiResponse(200, null, "Category deleted successfully"));
});
