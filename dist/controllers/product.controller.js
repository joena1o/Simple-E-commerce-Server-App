"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsById = exports.getProducts = exports.uploadProduct = void 0;
const product_model_1 = __importDefault(require("../models/product_model"));
const uploadProduct = async (req, res) => {
    try {
        const result = await product_model_1.default.create(req.body);
        return res.status(201).json({ message: "Ad Uploaded", product: result });
    }
    catch (err) {
        res.status(500).json({ error: String(err) });
    }
};
exports.uploadProduct = uploadProduct;
const getProducts = async (req, res) => {
    try {
        const results = await product_model_1.default.find();
        return res.status(200).json({ data: results });
    }
    catch (err) {
        res.status(500).json({ error: String(err) });
    }
};
exports.getProducts = getProducts;
const getProductsById = async (req, res) => {
    try {
        const result = await product_model_1.default.findOne({ _id: req.params.id });
        return res.status(200).json({ data: result });
    }
    catch (err) {
        res.status(500).json({ error: String(err) });
    }
};
exports.getProductsById = getProductsById;
