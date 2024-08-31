import { Schema, Model } from "mongoose";

const cartSchema = new Schema(
  {
    items: {
      type: Array,
      required: true,
      default: [],
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    userId: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CartModel = new Model('cart', cartSchema);
export default CartModel;
