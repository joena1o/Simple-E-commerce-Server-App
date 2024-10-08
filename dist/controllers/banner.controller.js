"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBanner = exports.deleteBanner = exports.UploadBanner = void 0;
const banner_model_1 = __importDefault(require("../models/banner_model"));
const UploadBanner = async (req, res) => {
    const { image, link } = req.body;
    try {
        const banner = new banner_model_1.default({
            image,
            link,
        });
        await banner.save();
        res.status(201).json({ message: "Banner uploaded successfully" });
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
};
exports.UploadBanner = UploadBanner;
const deleteBanner = async (req, res) => {
    try {
        const result = await banner_model_1.default.findOneAndDelete({ _id: req.params.id });
        if (result) {
            res.status(201).json({ message: "Banner deleted successfully" });
        }
        else {
            res.status(400).json({ error: "Item does not exist" });
        }
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
};
exports.deleteBanner = deleteBanner;
const updateBanner = async (req, res) => {
    const { _id } = req.params;
    const { image, link } = req.body;
    try {
        const result = await banner_model_1.default.findOneAndUpdate({ _id }, {
            $set: {
                image,
                link,
            },
        }, { new: true });
        if (result) {
            res.status(201).json({ message: "Banner updated successfully" });
        }
        else {
            res.status(400).json({ error: "Item does not exist" });
        }
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
};
exports.updateBanner = updateBanner;
