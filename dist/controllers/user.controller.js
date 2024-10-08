"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = exports.createUserWithGoogleSignUp = exports.createUserManualSignUp = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const google_auth_library_1 = require("google-auth-library");
dotenv_1.default.config();
const client = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const jwtSecret = process.env.JWT_SECRET;
const createUserManualSignUp = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        let user = await user_model_1.default.findOne({ email: email });
        if (user) {
            res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        user = new user_model_1.default({
            email,
            name,
            password: hashedPassword,
        });
        await user.save();
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, jwtSecret);
        res.status(201).json({ data: user, message: "User registered successfully", token });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.createUserManualSignUp = createUserManualSignUp;
const createUserWithGoogleSignUp = async (req, res) => {
    const { idToken } = req.body;
    try {
        //In Service
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.createUserWithGoogleSignUp = createUserWithGoogleSignUp;
const LoginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await user_model_1.default.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        if (user.googleId && !user.password) {
            return res
                .status(400)
                .send("This account was created using Google. Please log in with Google.");
        }
        if (user.password) {
            const isMatch = await bcrypt_1.default.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ error: "Invalid credentials" });
            }
        }
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, jwtSecret);
        res.status(200).json({ data: user, message: "Login successful", token });
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
exports.LoginUser = LoginUser;
