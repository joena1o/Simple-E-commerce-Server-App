import { Router } from "express";
import * as product from "../controllers/product.controller";

const router = Router();

router.post('/', product.uploadProduct);
router.get('/', product.getProducts);
router.get('/:id', product.getProductsById);

export default router;