"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const banner_controller_1 = require("../controllers/banner.controller");
const router = (0, express_1.Router)();
router.post("/", banner_controller_1.UploadBanner);
router.delete("/", banner_controller_1.deleteBanner);
router.put("/", banner_controller_1.updateBanner);
exports.default = router;
