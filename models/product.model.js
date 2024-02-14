import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      maxlength: [250, "Product name should be under 250 chars"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    photos: {
      type: Array,
      default: [],
    },
    price: {
      type: Number,
      required: true,
    },
    unit: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "category",
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

export default Product;
