import { v2 as cloudinary } from "cloudinary";

const connectToCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDIANRY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true,
  });
};

export default connectToCloudinary;
