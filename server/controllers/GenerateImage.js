
import {createError} from "../error.js";
import { HfInference } from '@huggingface/inference';
import * as dotenv from "dotenv"

// Initialize Hugging Face
const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    // Using Stable Diffusion XL (best free alternative to DALL-E 3)
    const response = await hf.textToImage({
      model: 'stabilityai/stable-diffusion-xl-base-1.0',
      inputs: prompt,
      parameters: {
        width: 1024,
        height: 1024,
        num_inference_steps: 50, // Higher = better quality but slower
      }
    });

    // Convert response to base64
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    const generatedImage = `data:image/png;base64,${base64}`;

    res.status(200).json({ photo: generatedImage });
  } catch (error) {
    next(
      createError(
        error.status || 500,
        error?.response?.data?. error?.message || error.message
      )
    );
  }
};