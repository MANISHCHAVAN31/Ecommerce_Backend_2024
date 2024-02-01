import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.ObjectId,
    ref: "product",
  },
  purchasedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
});

const Cart = mongoose.model("cart", cartSchema);

export default Cart;
