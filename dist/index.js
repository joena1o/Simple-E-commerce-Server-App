"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const product_route_1 = __importDefault(require("./routes/product.route"));
const wishlist_route_1 = __importDefault(require("./routes/wishlist.route"));
const image_route_1 = __importDefault(require("./routes/image.route"));
const banner_route_1 = __importDefault(require("./routes/banner.route"));
const cart_route_1 = __importDefault(require("./routes/cart.route"));
const db_1 = __importDefault(require("./database/db"));
const dotenv_1 = __importDefault(require("dotenv"));
const authenticate_token_1 = __importDefault(require("./middlewares/authenticate_token"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(express_1.default.json());
(0, db_1.default)();
app.use("/image", authenticate_token_1.default, image_route_1.default);
app.use("/user", user_route_1.default);
app.use("/banner", authenticate_token_1.default, banner_route_1.default);
app.use("/product", authenticate_token_1.default, product_route_1.default);
app.use("/wishlist", authenticate_token_1.default, wishlist_route_1.default);
app.use('/cart', authenticate_token_1.default, cart_route_1.default);
app.get("/", (req, res) => {
    res.send("Hello, TypeScript with Express!");
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
