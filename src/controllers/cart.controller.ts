import { Request, Response } from "express";
import CartModel from "../models/cart_model";

export const addToCart = async (req: Request, res: Response) => {
  try {
    await CartModel.create(req.body);
    res.send(201).json({ message: "Items successfully added to cart" });
  } catch (err) {
    res.send(500).json({ error: err });
  }
};




