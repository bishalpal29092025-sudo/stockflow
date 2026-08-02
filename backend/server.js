import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("🚀 Product API is Running...");
});

// Database Connection
connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
});