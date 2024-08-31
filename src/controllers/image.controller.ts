import cloudinary from "cloudinary";
import { Request, Response } from "express";

const cloudinaryV2 = cloudinary.v2;

interface MulterRequest extends Request {
  file: Express.Multer.File;
}

cloudinaryV2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


export const uploadImage = async (req: Request, res: Response) => {
  try {
     const multerReq = req as MulterRequest;                  
    // Upload image to Cloudinary
    const result = await cloudinaryV2.uploader.upload(multerReq.file.path, {
      folder: "my_images",
    });
    // Send the Cloudinary URL in the response
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error uploading image to Cloudinary" });
  }
};
