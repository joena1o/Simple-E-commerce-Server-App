import mongoose, { Schema } from "mongoose";

const WishListSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WishListModel =  mongoose.model("wishlist", WishListSchema);
export default WishListModel;
