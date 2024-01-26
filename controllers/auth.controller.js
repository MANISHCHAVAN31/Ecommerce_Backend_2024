import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import cookieToken from "../utils/cookieToken.js";

export const signup = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  let existingUser = await User.findOne({
    email: email,
  });

  if (existingUser) {
    throw new ApiError(400, "Email is already registered");
  }

  const user = await User.create({
    firstname: firstName,
    lastname: lastName,
    email: email,
    password: password,
  });

  cookieToken(user, res);
});

export const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email: email }).select("+password");

  if (!existingUser) {
    throw new ApiError(400, "Email is not registered");
  }

  const isValidPassword = await existingUser.isValidatePassword(password);

  if (!isValidPassword) {
    throw new ApiError(400, "Email and password are not matching");
  }

  cookieToken(existingUser, res);
});

export const logout = asyncHandler(async (req, res) => {
  // res.cookie("token", null, {
  //   expiresIn: new Date(Date.now()),
  //   httpOnly: true,
  // });

  res.clearCookie('token')

  res.status(200).json({
    success: true,
    message: "Logout Successful",
  });
});
