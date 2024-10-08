"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    googleId: { type: String, unique: true, sparse: true }, // For Google-authenticated users
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, select: false }, // Only manual sign-up users will have this
    picture: { type: String },
    privileges: { type: String, default: "user" }
});
const UserModel = mongoose_1.default.model("user", UserSchema);
exports.default = UserModel;
