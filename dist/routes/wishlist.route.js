"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wishlist_controller_1 = require("../controllers/wishlist.controller");
const router = (0, express_1.Router)();
router.delete('/', wishlist_controller_1.removeFromWishList);
router.post('/', wishlist_controller_1.addWishList);
router.get('/:userId', wishlist_controller_1.getUsersWishList);
exports.default = router;
