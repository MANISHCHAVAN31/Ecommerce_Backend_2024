import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide first name"],
      maxlength: [50, "First name should be under 50 chars"],
    },
    lastname: {
      type: String,
      maxlength: [50, "First name should be under 50 chars"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      validate: [validator.isEmail, "Please enter email in correct format"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [6, "Password should be atleast 6 chars"],
      select: false,
    },
    phone_initial: {
      type: String,
      default: "91", // india code
    },
    phone_number: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    photo: {
      id: {
        type: String,
      },
      secure_url: {
        type: String,
      },
    },
    forgottenToken: String,
    forgotPasswordExpiry: Date,

    // userdetails
    address_line_1: {
      type: String,
    },
    address_line_2: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    pincode: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  { timestamps: true }
);

// encrypt password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next;
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// validate password
userSchema.methods.isValidatePassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};

// create and return jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

const User = mongoose.model("user", userSchema);
export default User;
