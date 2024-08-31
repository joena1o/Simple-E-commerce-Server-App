import { Router } from "express";
import multerConfig from '../utils/multer_config';
import {uploadImage} from "../controllers/image.controller";

const router = Router();

router.post("/upload-image", multerConfig.single('file'), uploadImage);

export default router;