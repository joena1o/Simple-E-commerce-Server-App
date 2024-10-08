"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    images: {
        type: Array,
        default: [],
    },
    varieties: {
        type: Array,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const ProductModel = mongoose_1.default.model("product", ProductSchema);
exports.default = ProductModel;
