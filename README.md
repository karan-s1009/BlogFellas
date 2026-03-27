# 📝 BlogFellas – AI-Powered Blogging Platform

🔗 **Live Website:** [BlogFellas](https://blog-fellas.vercel.app)

BlogFellas is a **modern blogging platform** that allows users to **read, write, and comment on blogs** seamlessly.
With **AI integration**, users can enhance their blogging experience, while admins have complete control over content and user interactions.

---

## 🔑 Key Features

* 🏠 **Home Page** – Explore latest blogs and trending content.
* ✍️ **Blog Posting** – Users can create and publish blogs with rich-text formatting.
* 💬 **Comments** – Read and post comments on blogs.
* 🔍 **Search & Filter** – Search for blogs by title, keywords, or categories.
* 👤 **Admin Login** – Secure login for admins to access the dashboard.
* ⚙️ **Admin Dashboard** – Manage platform with four main sections:

  * Main Dashboard
  * Add Blog
  * Blog List
  * Comments List
* 🤖 **AI Integration** – Utilize Gemini AI for content suggestions and enhancements.
* 🖼️ **Image Processing** – Upload and optimize images using Imagekit.
* 👤 **User Authentication** – Secure login and registration using JWT.
* 📱 **Responsive Design** – Works perfectly on desktop and mobile devices.

---

## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS
**Backend:** Node.js, Express.js
**Database:** MongoDB (Mongoose)
**Authentication:** JWT (JSON Web Token)
**Hosting:** Vercel
**Image Processing:** Imagekit
**AI Integration:** Gemini AI
**External Libraries:** react-router-dom, cors, axios, dotenv, jsonwebtoken, moment, framer-motion, quill, react-hot-toast, multer

---

## 📄 Pages Overview

* **Home Page** – Browse blogs and featured posts.
* **Blog Page** – View individual blogs with comments and AI-enhanced content.
* **Admin Login Page** – Secure login page for admin access.
* **Admin Dashboard** – Manage blogs and comments:

  * **Main Dashboard Page** – Overview of platform stats.
  * **Add Blog Page** – Create new blogs with images and rich text.
  * **Blog List Page** – Edit, delete, or manage all blogs.
  * **Comments List Page** – Moderate and manage user comments.

---

## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/your-username/blogfellas.git
cd blogfellas
```

### 2. Install Dependencies

```
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 3. Setup Environment Variables

Create a `.env` file inside the **server** folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

### 4. Run the Application

```
# Run backend
cd server
npm start

# Run frontend (in a new terminal)
cd client
npm run dev
```

### 5. Open in Browser

```
http://localhost:5173
```

---

## 👨‍💻 Contributing

Contributions are welcome! Fork the repo, create a branch, and submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License**.

