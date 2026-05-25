# CodeAlpha_SocialMediaPlatform

A simple full-stack social media web application built using Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript.

## 🚀 Features

- User Registration
- User Login Authentication
- JWT Token Authentication
- Create Posts
- View Posts Feed
- Like Posts
- User Profile Page
- Logout Functionality

---

# 🛠 Technologies Used

## Frontend
- HTML
- CSS
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB

## Authentication
- JWT (JSON Web Token)

---

# 📁 Project Structure

```bash
CodeAlpha_SocialMediaPlatform/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── home.html
│   ├── profile.html
│   ├── style.css
│   ├── script.js
│
├── models/
│   ├── User.js
│   ├── Post.js
│
├── routes/
│   ├── authRoutes.js
│   ├── postRoutes.js
│   ├── userRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│
├── server.js
├── .env
├── package.json
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone <repository-link>
```

---

## 2️⃣ Open Project Folder

```bash
cd CodeAlpha_SocialMediaPlatform
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

OR

```bash
npm install express mongoose bcryptjs jsonwebtoken cors dotenv
```

---

# 🔑 Environment Variables

Create a `.env` file in root folder:

```env
MONGO_URI=mongodb://127.0.0.1:27017/socialmedia
JWT_SECRET=mysecretkey
```

---

# ▶️ Run Backend Server

```bash
node server.js
```

### Output:

```bash
MongoDB Connected
Server running on port 5000
```

---

# 🌐 Run Frontend

Open frontend using VS Code Live Server.

Open:

```bash
frontend/login.html
```

---

# 🔄 Application Flow

```text
Register
   ↓
Login
   ↓
Home Feed
   ↓
Create Post
   ↓
Like Post
   ↓
View Profile
   ↓
Logout
```

---

# 📌 API Routes

## Authentication

| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

---

## Posts

| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/posts | Get All Posts |
| POST | /api/posts | Create Post |
| PUT | /api/posts/like/:id | Like Post |

---


# ✅ Future Improvements

- Comments System
- Image Upload
- Real-time Chat
- Notifications
- Responsive UI
- Dark Mode

