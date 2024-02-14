import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import User from "../models/user.model.js";

export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(new ApiResponse(200, user));
});

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(new ApiResponse(200, users));
});
