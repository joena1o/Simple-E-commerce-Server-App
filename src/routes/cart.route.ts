import { Router } from "express";
import * as cart from '../controllers/cart.controller';

const router = Router();

router.post("/", cart.addToCart);

export default router;
