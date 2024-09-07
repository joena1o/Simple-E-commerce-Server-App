import {Router} from 'express';
import { deleteBanner, updateBanner, UploadBanner } from '../controllers/banner.controller';

const router = Router();

router.post("/", UploadBanner);
router.delete("/", deleteBanner);
router.put("/", updateBanner);

export default router;