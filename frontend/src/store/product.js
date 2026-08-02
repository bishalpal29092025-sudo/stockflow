import { create } from "zustand";

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

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();

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
  },

  // Get All Products
  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();

    set({
      products: data.data,
    });
  },

  // Get Product By ID
  fetchProductById: async (id) => {
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();

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
  },

  // Update Product
  updateProduct: async (id, updatedProduct) => {
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    const data = await res.json();

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
  },

  // Delete Product
  deleteProduct: async (id) => {
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!data.success) {
      return {
        success: false,
        message: data.message,
      };
    }

    set((state) => ({
      products: state.products.filter((product) => product._id !== id),
    }));

    return {
      success: true,
      message: data.message,
    };
  },
}));