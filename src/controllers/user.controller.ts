import { Response, Request } from "express";
import UserModel from "../models/user.model";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

dotenv.config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const jwtSecret:any = process.env.JWT_SECRET;

interface GoogleTokenInfo {
  aud: string;
  sub: string;
  email?: string;
  name?: string;
  picture?: string;
}

export const createUserManualSignUp = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  try {
    let user = await UserModel.findOne({ email: email });
    if (user) {
      res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = new UserModel({
      email,
      name,
      password: hashedPassword,
    });
    await user.save();
    const token = jwt.sign({ userId: user._id }, jwtSecret);
    res.status(201).json({ data: user, message: "User registered successfully", token });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createUserWithGoogleSignUp = async (
  req: Request,
  res: Response
) => {
  const { idToken } = req.body;
  try {
    //In Service
  } catch (err) {
    res.status(500).json({ error: err });
  }

};


export const LoginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({error: "Invalid credentials"});
    }
    if (user.googleId && !user.password) {
      return res
        .status(400)
        .send(
          "This account was created using Google. Please log in with Google."
        );
    }
    if (user.password) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({error: "Invalid credentials"});
      }
    }
    const token = jwt.sign({ userId: user._id }, jwtSecret);
    res.status(200).json({ data: user, message: "Login successful", token });
  } catch (error) {
    res.status(500).json({error: "Server error"});
  }
};
