import { Request, Response } from "express";
import BannerModel from "../models/banner_model";

export const UploadBanner = async (req: Request, res: Response) => {
  const { image, link } = req.body;
  try {
    const banner = new BannerModel({
      image,
      link,
    });
    await banner.save();
    res.status(201).json({ message: "Banner uploaded successfully" });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export const deleteBanner = async (req: Request, res: Response) => {
  try {
    const result = await BannerModel.findOneAndDelete({ _id: req.params.id });
    if (result) {
      res.status(201).json({ message: "Banner deleted successfully" });
    } else {
      res.status(400).json({ error: "Item does not exist" });
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export const updateBanner = async (req: Request, res: Response) => {
  const { _id } = req.params;
  const { image, link } = req.body;
  try {
    const result = await BannerModel.findOneAndUpdate(
      { _id },
      {
        $set: {
          image,
          link,
        },
      },
      { new: true }
    );
    if (result) {
      res.status(201).json({ message: "Banner updated successfully" });
    } else {
      res.status(400).json({ error: "Item does not exist" });
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
