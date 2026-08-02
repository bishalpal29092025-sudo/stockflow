import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

/**
 * Middleware
 */
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local Vite
      process.env.FRONTEND_URL, // Production Frontend (Vercel)
    ].filter(Boolean),
    credentials: true,
  })
);

app.use(express.json());

/**
 * Routes
 */
app.use("/api/products", productRoutes);

/**
 * Health Check
 */
app.get("/", (req, res) => {
  res.send("🚀 Product API is Running...");
});

/**
 * Database
 */
connectDB();

/**
 * Server
 */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});