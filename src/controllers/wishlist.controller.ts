import { Response, Request } from "express";
import WishListModel from "../models/wish_list_model";

export const addWishList = async (req: Request, res: Response) => {
  try {
    await WishListModel.create(req.body);
    res.status(201).json({ message: "Item has been added to wishlist" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const removeFromWishList = async (req: Request, res: Response) => {
  try {
    await WishListModel.findByIdAndDelete(req.body.id);
    res.status(201).json({ message: "Item has been removed from wishlist" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getUsersWishList = async (req: Request, res: Response) => {
  try {
    const results = await WishListModel.find().populate("itemId");
    res.send(200).json({ data: results });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getWishListItem = async (req: Request, res: Response) => {
  try {
    const results = await WishListModel.findOne({
      _id: req.params.id,
    }).populate("itemId");
    res.send(200).json({ data: results });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
