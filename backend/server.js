import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Log every request
app.use((req, res, next) => {
  console.log("=================================");
  console.log("Origin:", req.headers.origin);
  console.log("Method:", req.method);
  console.log("URL:", req.originalUrl);
  console.log("=================================");
  next();
});

// Allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

// CORS
app.use(
  cors({
    origin(origin, callback) {
      // Allow Postman, curl, browser direct requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked Origin:", origin);

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Parse JSON
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Product API is Running...");
});

app.use("/api/products", productRoutes);

// Database
connectDB();

// Start Server
app.listen(PORT, () => {
  console.log("=================================");
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("Allowed Origins:");
  console.log(allowedOrigins);
  console.log("=================================");
});