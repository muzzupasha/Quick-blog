<div align="center">
  <img src="https://socialify.git.ci/muzzupasha/Blog-app/image?description=1&font=Inter&name=1&pattern=Circuit%20Board&theme=Dark" alt="Blog App" width="600" />

  <h1 align="center">✨ Next-Gen Blog App</h1>

  <p align="center">
    A modern, high-performance, and feature-rich full-stack blogging platform powered by AI.
    <br />
    <a href="https://blog-app-ten-sigma-70.vercel.app/"><strong>Explore the Live Application »</strong></a>
    <br />
    <br />
  </p>

  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node" />
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express" alt="Express" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  </p>
</div>

---

## 🚀 Overview

**Blog App** is a meticulously designed full-stack application built to deliver a seamless reading and writing experience. Using the robust MERN stack (MongoDB, Express, React, Node.js) combined with Vite for lightning-fast frontend tooling, this platform offers more than just traditional blogging. 

With deep integrations of **Google Gemini API** for AI-assisted writing and **ImageKit** for optimized cloud-based media management, this application stands out as a next-generation content management system.

**🔗 Live Demo:** [https://blog-app-ten-sigma-70.vercel.app/](https://blog-app-ten-sigma-70.vercel.app/)

## ✨ Key Features

- **🤖 AI-Powered Writing Assistant**: Integrated with Google's GenAI API to help generate, summarize, or enhance blog content.
- **🖼️ Advanced Image Management**: Seamless image uploads, optimization, and delivery via ImageKit.
- **🔐 Secure Authentication**: Robust JWT-based secure user authentication and authorization logic protecting user data and admin routes.
- **📝 Rich Text & Markdown Editing**: Uses `react-quill` for WYSIWYG editing, and `marked` for fast Markdown rendering.
- **🎨 Beautiful, Modern UI**: Crafted with React 19, Tailwind CSS v4, and stunning micro-interactions powered by Framer Motion.
- **📱 Responsive by Design**: A carefully tailored user interface that provides an exceptional experience across mobile, tablet, and desktop.
- **⚡ Supercharged Performance**: Built with Vite and modern React features for instant updates and fast loading speeds.

## 🛠️ Technology Stack

### Frontend Architecture (`/client`)
- **Core:** React 19, Vite
- **Routing & Communication:** React Router DOM v7, Axios
- **Styling & UI:** Tailwind CSS (v4), Framer Motion
- **Editor & Formatting:** Quill, Marked, Moment.js
- **Notifications:** React Hot Toast

### Backend Architecture (`/server`)
- **Runtime & Framework:** Node.js, Express.js
- **Database:** MongoDB via Mongoose
- **Security & Uploads:** JSON Web Tokens (JWT), Multer, CORS
- **Cloud Integrations:** `@google/genai` (AI integration), `@imagekit/nodejs` (Image Management)

## 📁 Project Structure

```text
📦 Blog App
 ┣ 📂 client               # React Frontend (Vite)
 ┃ ┣ 📂 src              # Source files (Components, Pages, Assets)
 ┃ ┣ 📜 package.json     # Frontend dependencies
 ┃ ┗ 📜 vite.config.js   # Vite configuration
 ┣ 📂 server               # Node.js/Express Backend
 ┃ ┣ 📂 controllers      # Business logic and request handling
 ┃ ┣ 📂 models           # Mongoose database models
 ┃ ┣ 📂 routes           # Express API endpoints
 ┃ ┣ 📂 middleware       # Custom middleware (Auth, etc.)
 ┃ ┣ 📂 configs          # Database and service configurations
 ┃ ┣ 📜 server.js        # Main entry point for the backend
 ┃ ┗ 📜 package.json     # Backend dependencies
 ┗ 📜 README.md          # Project documentation
```

## ⚙️ Local Development

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed along with a MongoDB instance (local or Atlas).

### 1. Clone the repository
```bash
git clone https://github.com/muzzupasha/Blog-app.git
cd Blog-app
```

### 2. Setup the Backend
Navigate to the `server` directory, install dependencies, and configure environment variables.
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
# ImageKit Config
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
# Google Gemini Config
GEMINI_API_KEY=your_gemini_api_key
```

### 3. Setup the Frontend
Open a new terminal, navigate to the `client` directory, install dependencies, and start the development server.
```bash
cd client
npm install
```
Create a `.env` file in the `client` directory:
```env
VITE_API_URL=http://localhost:5000
```

### 4. Run the Application
**Start the Backend:**
```bash
# Inside the server/ directory
npm run server
```

**Start the Frontend:**
```bash
# Inside the client/ directory
npm run dev
```

Your application should now be running on `http://localhost:5173`.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!  
Feel free to check out the [issues page](https://github.com/muzzupasha/Blog-app/issues).

## 📄 License
This project is open-source and available under the **ISC License**.

---
*Developed with modern web technologies for an exceptional publishing experience.*
