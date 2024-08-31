import ProductModel from "../models/upload_product_model";
import { Request, Response } from "express";

export const uploadProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductModel.create(req.body);
    return res.status(201).json({ message: "Ad Uploaded", product: result });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const results = await ProductModel.find();
    return res.status(200).json({ data: results });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const getProductsById = async (req: Request, res: Response) => {
  try {
    const result = await ProductModel.findOne({ _id: req.params.id });
    return res.status(200).json({ data: result });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};
