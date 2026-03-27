# 📝 BlogFellas – AI-Powered Blogging Platform

🔗 **Live Website:** [BlogFellas](https://blog-fellas.vercel.app)

BlogFellas is a **modern AI-powered blogging platform** that allows users to **read, write, and interact with blogs seamlessly**.
Built with the **MERN stack**, it enhances content creation using **Gemini AI** and optimizes media handling with **ImageKit** for fast and efficient image delivery.

---

## 🔑 Key Features

* 🏠 **Home Page** – Explore latest and trending blogs
* ✍️ **Blog Creation** – Write and publish blogs with rich-text formatting
* 💬 **Comments System** – Engage with blogs through comments
* 🔍 **Search & Filter** – Find blogs by title, keywords, or categories
* 🔐 **Admin Authentication** – Secure login using JWT
* ⚙️ **Admin Dashboard** – Manage platform with multiple sections:

  * Main Dashboard
  * Add Blog
  * Blog List
  * Comments List
* 🤖 **AI Integration** – Use Gemini AI for content suggestions and enhancements
* 🖼️ **Image Management** – Upload, optimize, and serve images using ImageKit
* 📱 **Responsive Design** – Works smoothly across all devices

---

## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS
**Backend:** Node.js, Express.js
**Database:** MongoDB (Mongoose)
**Authentication:** JWT (JSON Web Token)
**Image Management:** ImageKit
**AI Integration:** Gemini AI
**Hosting:** Vercel
**External Libraries:** react-router-dom, axios, cors, dotenv, jsonwebtoken, multer, moment, framer-motion, quill, react-hot-toast

---

## 📄 Pages Overview

* **Home Page** – Browse blogs and featured content
* **Blog Page** – View individual blogs with comments
* **Admin Login Page** – Secure admin authentication
* **Admin Dashboard** – Manage content and interactions:

  * **Main Dashboard** – Platform overview
  * **Add Blog** – Create blogs with images and rich text
  * **Blog List** – Edit or delete blogs
  * **Comments List** – Moderate user comments

---

## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/your-username/blogfellas.git
cd blogfellas
```

---

### 2. Install Dependencies

```
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file inside the **server** folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

---

### 4. Run the Application

```
# Run backend
cd server
npm start

# Run frontend (in a new terminal)
cd client
npm run dev
```

---

### 5. Open in Browser

```
http://localhost:5173
```

---

## 🧠 How It Works

1. Admin logs in using JWT authentication
2. Admin creates blogs with rich-text content and images
3. Images are uploaded and optimized via ImageKit
4. Users browse blogs and interact through comments
5. Gemini AI assists in content generation and enhancement
6. Blogs and user interactions are stored and managed in MongoDB

---

## 👨‍💻 Contributing

Contributions are welcome! Fork the repo, create a branch, and submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License**.

