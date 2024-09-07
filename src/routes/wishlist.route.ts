import { Router } from "express";
import { addWishList, getUsersWishList, removeFromWishList } from "../controllers/wishlist.controller";

const router = Router();

router.delete('/', removeFromWishList);
router.post('/', addWishList);
router.get('/:userId', getUsersWishList);

export default router;