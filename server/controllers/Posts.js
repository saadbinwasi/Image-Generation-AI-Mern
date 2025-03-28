import Post from '../models/Posts.js'
import * as dotenv from "dotenv"
import {createError} from "../error.js"
import { v2 as cloudinary } from "cloudinary";



dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});





    export const getAllPosts = async (req, res, next) => {
        try {
          const posts = await Post.find({});
          return res.status(200).json({ success: true, data: posts });
        } catch (error) {
          return next(
            createError(
              error.status,
              error?.response?.data?.error.message || error.message
            )
          );
        }
      };



      export const createPost = async (req, res, next) => {
        try {
          const { name, prompt, photo } = req.body;
      
          // Validate the base64 string
          if (!photo.startsWith('data:image/')) {
            return next(createError(400, "Invalid image format"));
          }
      
          // Upload with explicit timestamp
          const timestamp = Math.round(Date.now()/1000);
          const uploadResponse = await cloudinary.uploader.upload(photo, {
            timestamp: timestamp,
            upload_preset: 'saad bin wasi' // Create one in Cloudinary settings
          });
      
          const newPost = await Post.create({
            name,
            prompt,
            photo: uploadResponse.secure_url
          });
      
          return res.status(201).json({ success: true, data: newPost });
      
        } catch (error) {
          console.error("Full Cloudinary error:", error);
          return next(createError(500, "Image upload failed. Please try again."));
        }
      };