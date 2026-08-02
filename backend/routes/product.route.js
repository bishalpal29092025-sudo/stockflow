import express from "express";

import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Create Product
router.post("/", createProduct);

// Get All Products
router.get("/", getProducts);

// Get Product By ID
router.get("/:id", getProduct);

// Update Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

export default router;