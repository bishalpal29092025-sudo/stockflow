import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

/**
 * ============================
 * Middleware
 * ============================
 */

// CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local Development
      process.env.FRONTEND_URL, // Vercel Frontend
    ].filter(Boolean),
    credentials: true,
  })
);

// Parse JSON Request Body
app.use(express.json());

/**
 * ============================
 * API Routes
 * ============================
 */

app.use("/api/products", productRoutes);

/**
 * ============================
 * Root Route
 * ============================
 */

app.get("/", (req, res) => {
  res.send("🚀 Product API is Running...");
});

/**
 * ============================
 * Database Connection
 * ============================
 */

connectDB();

/**
 * ============================
 * Start Server
 * ============================
 */

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});