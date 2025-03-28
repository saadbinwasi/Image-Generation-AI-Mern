#  AI Image Generation Platform (GenGram)

<div align="left">
<img height="400" width="650" src="https://github.com/saadbinwasi/Image-Generation-AI-Mern/blob/main/photo/Screenshot%202025-03-28%20at%208.13.03%E2%80%AFAM.png"/>
</div>

<div align="right">
<img height="400" width="650" src="https://github.com/saadbinwasi/Image-Generation-AI-Mern/blob/main/photo/Screenshot%202025-03-28%20at%207.27.24%E2%80%AFAM.png"/>
</div>

<div align="left">
<img height="400" width="650" src="https://github.com/saadbinwasi/Image-Generation-AI-Mern/blob/main/photo/Screenshot%202025-03-28%20at%207.25.29%E2%80%AFAM.png"/>
</div>

## 🌟 Overview
A full-stack platform where users can generate AI images using Stable Diffusion and share them in a community feed. Built with the MERN stack.

## ✨ Key Features
- 🖼️ AI-powered image generation using Stable Diffusion XL
- 🔍 Search images by username or prompt
- 🚀 Instant image posting to community feed
- 💡 Clean, responsive UI with Material-UI

## 🛠️ Tech Stack
| Component       | Technologies |
|-----------------|--------------|
| **Frontend**    | React, Material-UI, Styled Components |
| **Backend**     | Node.js, Express |
| **Database**    | MongoDB |
| **AI Service**  | Hugging Face (stabilityai/stable-diffusion-xl-base-1.0) |
| **Storage**     | Cloudinary |

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account
- Cloudinary account
- Hugging Face API token

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/Image-Generation-AI-Mern.git
   cd Image-Generation-AI-Mern


2. Set up environment variables:
   ```bash
    MONGODB_URI=your_mongodb_uri
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    HUGGINGFACE_API_KEY=your_hf_token    
    
3. Install dependencies:
    ```bash
    # Server
    cd server && npm install

    # Client
    cd ../client && npm install


### 🔧 How It Works

### Image Generation:

- User enters prompt → Sent to Hugging Face API

- AI generates image → Stored in Cloudinary

- Image URL returned to frontend

#### Community Feed:

- Posts saved to MongoDB

- searchable by username/prompt

- Real-time updates

