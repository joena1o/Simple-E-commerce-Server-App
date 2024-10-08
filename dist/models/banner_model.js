"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BannerSchema = new mongoose_1.default.Schema({
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: false,
        default: null,
    },
}, {
    timestamps: true,
});
const BannerModel = mongoose_1.default.model("banner", BannerSchema);
exports.default = BannerModel;
