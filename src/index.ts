import express from "express";
import UserRoute from './routes/user.route';
import ProductRoute from './routes/product.route';
import WishListRoute from './routes/wishlist.route';
import ImageRoute from './routes/image.route';
import BannerRoute from './routes/banner.route';
import CartRoute from './routes/cart.route';
import connectToDb from "./database/db";
import dotenv from 'dotenv';
import authenticateToken from "./middlewares/authenticate_token";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json()); 

connectToDb();

app.use("/image", authenticateToken, ImageRoute);
app.use("/user", UserRoute);
app.use("/banner", authenticateToken, BannerRoute);
app.use("/product", authenticateToken, ProductRoute);
app.use("/wishlist", authenticateToken, WishListRoute);
app.use('/cart', authenticateToken, CartRoute);

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
