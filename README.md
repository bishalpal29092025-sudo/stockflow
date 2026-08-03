# 📦 StockFlow

A modern **Full-Stack Inventory Management System** built with the **MERN Stack**. StockFlow allows users to create, view, update, and delete products through a clean and responsive user interface.

🌐 **Live Demo:** https://stockflow-xi-ten.vercel.app

---

## 🚀 Features

- ✅ Create Product
- ✅ View All Products
- ✅ Update Existing Product
- ✅ Delete Product
- ✅ Responsive User Interface
- ✅ Light & Dark Theme
- ✅ Toast Notifications
- ✅ RESTful API
- ✅ MongoDB Atlas Integration
- ✅ Production Deployment

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Chakra UI v3
- Zustand
- React Router DOM

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📁 Project Structure

```text
stockflow/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── product/
│   │   │   └── ui/
│   │   ├── constants/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 📸 Screens

- 🏠 Home Page
- ➕ Create Product
- ✏️ Edit Product
- 🌙 Dark Mode
- 📱 Responsive Layout

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/bishalpal29092025-sudo/stockflow.git
```

```bash
cd stockflow
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the **backend** folder.

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

Run the backend server

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file inside the **frontend** folder.

For local development

```env
VITE_API_URL=http://localhost:5001/api
```

Run the frontend

```bash
npm run dev
```

The application will be available at

```
Frontend : http://localhost:5173
Backend  : http://localhost:5001
```

---

## 🌍 Production

### Frontend

Deployed on **Vercel**

```
https://stockflow-xi-ten.vercel.app
```

### Backend

Deployed on **Render**

```
https://stockflow-api-4dh7.onrender.com
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a single product |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

---

## 🧪 Current Features

- Product CRUD Operations
- REST API
- Zustand State Management
- Chakra UI Components
- Toast Notifications
- React Router Navigation
- Environment Variables
- CORS Configuration
- Production Deployment

---

## 🚀 Future Improvements

- 🔐 JWT Authentication
- 👤 User Accounts
- 📂 Product Categories
- 🔍 Search Products
- 📄 Pagination
- ☁️ Cloudinary Image Upload
- 📊 Dashboard & Analytics
- ❤️ Wishlist/Favorites
- 📱 Progressive Web App (PWA)
- 🧪 Unit & Integration Testing
- 🐳 Docker Support
- ⚡ GitHub Actions CI/CD

---

## 📚 What I Learned

During this project I gained hands-on experience with:

- Building a complete MERN application
- Designing REST APIs
- MongoDB Atlas integration
- React state management using Zustand
- Chakra UI v3
- React Router
- Environment Variables
- CORS configuration
- Production deployment using Render & Vercel
- Debugging frontend-backend communication
- Managing Git & GitHub workflows

---

## 👨‍💻 Author

**Bishal Pal**

- GitHub: https://github.com/bishalpal29092025-sudo
- LinkedIn: https://www.linkedin.com/in/bishalpal29092025/

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

It motivates me to continue building and sharing more full-stack projects.