"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWishListItem = exports.getUsersWishList = exports.removeFromWishList = exports.addWishList = void 0;
const wish_list_model_1 = __importDefault(require("../models/wish_list_model"));
const addWishList = async (req, res) => {
    const { userId, itemId } = req.body;
    try {
        const checkIfAvailable = await wish_list_model_1.default.findOne({ userId: userId, itemId: itemId });
        if (checkIfAvailable) {
            await wish_list_model_1.default.findOneAndDelete({ userId, itemId });
            return res.status(201).json({ message: "Item has been removed from wishlist" });
        }
        await wish_list_model_1.default.create(req.body);
        return res.status(201).json({ message: "Item has been added to wishlist" });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.addWishList = addWishList;
const removeFromWishList = async (req, res) => {
    try {
        await wish_list_model_1.default.findByIdAndDelete(req.body.id);
        res.status(201).json({ message: "Item has been removed from wishlist" });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.removeFromWishList = removeFromWishList;
const getUsersWishList = async (req, res) => {
    const { userId } = req.params;
    try {
        const results = await wish_list_model_1.default.find({ userId }).populate("itemId");
        console.log(results);
        res.status(200).json({ data: results });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.getUsersWishList = getUsersWishList;
const getWishListItem = async (req, res) => {
    try {
        const results = await wish_list_model_1.default.findOne({
            _id: req.params.id,
        }).populate("itemId");
        res.status(200).json({ data: results });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.getWishListItem = getWishListItem;
