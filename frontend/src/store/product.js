import { create } from "zustand";
import { productService } from "@/services/product.service";

export const useProductStore = create((set) => ({
  products: [],
  product: null,

  setProducts: (products) => set({ products }),
  setProduct: (product) => set({ product }),

  // Create Product
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return {
        success: false,
        message: "Please fill in all fields.",
      };
    }

    try {
      const data = await productService.createProduct(newProduct);

      if (!data.success) {
        return {
          success: false,
          message: data.message,
        };
      }

      set((state) => ({
        products: [...state.products, data.data],
      }));

      return {
        success: true,
        message: data.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to create product.",
      };
    }
  },

  // Fetch All Products
  fetchProducts: async () => {
    try {
      const data = await productService.getProducts();

      if (!data.success) {
        return {
          success: false,
          message: data.message,
        };
      }

      set({
        products: data.data,
      });

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch products.",
      };
    }
  },

  // Fetch Product By ID
  fetchProductById: async (id) => {
    try {
      const data = await productService.getProductById(id);

      if (!data.success) {
        return {
          success: false,
          message: data.message,
        };
      }

      set({
        product: data.data,
      });

      return {
        success: true,
        product: data.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch product.",
      };
    }
  },

  // Update Product
  updateProduct: async (id, updatedProduct) => {
    try {
      const data = await productService.updateProduct(id, updatedProduct);

      if (!data.success) {
        return {
          success: false,
          message: data.message,
        };
      }

      set((state) => ({
        products: state.products.map((product) =>
          product._id === id ? data.data : product
        ),
        product: data.data,
      }));

      return {
        success: true,
        message: data.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to update product.",
      };
    }
  },

  // Delete Product
  deleteProduct: async (id) => {
    try {
      const data = await productService.deleteProduct(id);

      if (!data.success) {
        return {
          success: false,
          message: data.message,
        };
      }

      set((state) => ({
        products: state.products.filter(
          (product) => product._id !== id
        ),
      }));

      return {
        success: true,
        message: data.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to delete product.",
      };
    }
  },
}));