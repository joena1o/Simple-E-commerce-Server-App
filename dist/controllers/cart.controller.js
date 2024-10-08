"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = void 0;
const cart_model_1 = __importDefault(require("../models/cart_model"));
const addToCart = async (req, res) => {
    try {
        await cart_model_1.default.create(req.body);
        res.send(201).json({ message: "Items successfully added to cart" });
    }
    catch (err) {
        res.send(500).json({ error: err });
    }
};
exports.addToCart = addToCart;
