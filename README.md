AI Powered Blog App (MERN + Gemini + ImageKit) 🚀

A modern, full‑stack blogging platform with an admin dashboard, AI‑generated content, optimized media delivery, category filters, search, and a full comments workflow — built with MongoDB, Express, React, and Node.js, integrated with Google Gemini API and ImageKit, and deployable on Vercel. 🧠📸⚡️

### Live Preview
- Live preview 🚀: [quickblog‑gs.vercel.app](https://blog-app-ten-sigma-70.vercel.app/) 🌐

## Highlights ✨
- AI content generation with Google Gemini for instant blog descriptions based on title/context 🤖
- ImageKit for secure upload, storage, transformation, and responsive optimization 🖼️
- Admin dashboard with stats, publish/unpublish, CRUD for blogs and comments 🛡️
- Blog browsing with search, category filters, and detailed post view 🔎
- Production‑ready MERN architecture with JWT auth and Vercel deployment 🧩

## Features 🧩
- Create, edit, delete blogs with thumbnail upload via ImageKit 📤
- One‑click “Generate with AI” to produce content using Gemini 🧠
- Category filter chips (e.g., Technology, Startup, Lifestyle, Finance) 🏷️
- Full blog detail page with date, author, thumbnail, content, and share icons 
- Comment system with admin moderation and approval ✅
- Dashboard metrics: total blogs, comments, drafts 📊

## Tech Stack 🛠️
- Frontend: React, Vite, Tailwind CSS, React Router 🔧
- Backend: Node.js, Express.js, JWT, Mongoose 🧱
- Database: MongoDB 🍃
- AI: Google Gemini API 🤖
- Media: ImageKit (upload, storage, transformation, CDN) 🖼️
- Deployment: Vercel ☁️

## Screens & Flows 🖥️
- Home: welcome banner, search, category filters, blog list, newsletter, footer 🏠
- Blog Page: publish date, title, subtitle, author, thumbnail, content, comments, share icons 📝
- Admin: login, overview stats, blog list (publish/unpublish/delete), comments moderation, add blog form with AI generate 💼

## Project Structure 📂
- client/ — React + Vite app with Tailwind, routes for Home, Blog, and Admin pages ⚛️
- server/ — Express APIs for auth, posts, comments, and dashboard data 🔌
- Integrations — Gemini service for AI text, ImageKit SDK for media 📦

## Getting Started 🧪

Prerequisites:
- Node.js LTS, npm, MongoDB connection URI, ImageKit account, Google AI Studio Gemini API key ✅
Clone and install:
- git clone (https://github.com/muzzupasha/Quick-blog) && cd <repo> 📥
- cd client && npm install; cd ../server && npm install 📦

Environment variables:

Create .env in server:
- MONGODB_URI=your_mongodb_uri
- JWT_SECRET=your_secure_secret
- GEMINI_API_KEY=your_gemini_key
- IMAGEKIT_PUBLIC_KEY=your_public_key
- IMAGEKIT_PRIVATE_KEY=your_private_key
- IMAGEKIT_URL_ENDPOINT=your_url_endpoint 🔐

Create .env in client (if needed):
- VITE_IMAGEKIT_PUBLIC_KEY=your_public_key
- VITE_IMAGEKIT_URL_ENDPOINT=your_url_endpoint
- VITE_API_BASE_URL=http://localhost:5000 🌐

Run dev:
- Server: cd server && npm run server ▶️
- Client: cd client && npm run dev ▶️

## Core Scripts 📜
- client: npm run dev, build, preview 🧰
- server: npm run server (nodemon), start 🚀

## API Overview 🔗
- Auth: POST /api/auth/login → returns JWT 🔑
- Posts:
  - POST /api/posts (admin) → create (with ImageKit upload) ✍️
  - GET /api/posts → list with search & category filter 📚
  - GET /api/posts/:id → details 🧾
  - PATCH /api/posts/:id → update/publish toggle 🛠️
  - DELETE /api/posts/:id → delete 🗑️
- Comments:
  - POST /api/comments → add comment 💬
  - GET /api/comments?status=approved|pending → moderation list 🗂️ 
  - PATCH /api/comments/:id → approve/reject ✅
  - DELETE /api/comments/:id → delete 🗑️
- Dashboard: GET /api/admin/metrics → counts for blogs/comments/drafts 📊

## ImageKit Integration 🖼️
- Client uploads thumbnail → server authenticates and stores → return optimized URL 🌍
- Use URL parameters for transformations (resize, format, compression) to improve performance ⚡️

## Gemini Integration 🤖
- Admin composer: click “Generate with AI” to create blog description from title/context 🧠
- Server helper calls Gemini API and returns cleaned, formatted content 📝

## Deployment (Vercel) ☁️
- Deploy client as Vite React app on Vercel 🧭
- Deploy server as serverless functions or on a Node host; set environment variables in Vercel 🔐
- Configure CORS and API base URL for production 🔧

## Security 🔒
- JWT‑based admin auth for protected routes 🔑
- Validate uploads and sanitize AI output prior to publish 🧹
- Do not expose private keys in client; keep secrets server‑side 🛡️

- Acknowledgments
 Google AI Studio (Gemini).
 ImageKit.
 Vercel.

## Roadmap 🗺️
- Draft autosave and scheduled publishing ⏱️
- Role‑based access for multi‑admin teams 🧑‍🤝‍🧑
- Rich analytics (views, reads, CTR) and RSS/SEO enhancements 📈


If this project helps, a ⭐️ would be awesome! Happy shipping! 🚀

[18](https://buymeacoffee.com/easytutorials/e/415667)
[19](https://github.com/pongky11/QuickGPT)
[20](https://www.quickblog.co/features)
