import { Router } from "express";
import { addWishList, getUsersWishList, getWishListItem, removeFromWishList } from "../controllers/wishlist.controller";

const router = Router();

router.delete('/', removeFromWishList);
router.post('/', addWishList);
router.get('/', getUsersWishList);
router.get("/:id", );

export default router;