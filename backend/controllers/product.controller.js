import mongoose from "mongoose";
import Product from "../models/product.model.js";

// Create Product
export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }

  try {
    const newProduct = new Product(product);
    await newProduct.save();

    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.error("Create Product Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error("Get Products Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get Product By ID
export const getProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid Product ID",
    });
  }

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error("Get Product Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid Product ID",
    });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      product,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Update Product Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid Product ID",
    });
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Delete Product Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};