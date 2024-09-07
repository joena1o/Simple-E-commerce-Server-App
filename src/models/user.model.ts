import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  googleId: { type: String, unique: true, sparse: true }, // For Google-authenticated users
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, select: false }, // Only manual sign-up users will have this
  picture: { type: String },
  privileges: {type: String, default: "user"}
});

const UserModel = mongoose.model("user", UserSchema);
export default UserModel;