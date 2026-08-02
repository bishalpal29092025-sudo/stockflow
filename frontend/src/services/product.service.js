import { API_URL } from "@/constants/api";

export const productService = {
  // Get all products
  async getProducts() {
    const res = await fetch(`${API_URL}/products`);
    return await res.json();
  },

  // Get product by ID
  async getProductById(id) {
    const res = await fetch(`${API_URL}/products/${id}`);
    return await res.json();
  },

  // Create product
  async createProduct(product) {
    const res = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    return await res.json();
  },

  // Update product
  async updateProduct(id, product) {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    return await res.json();
  },

  // Delete product
  async deleteProduct(id) {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
    });

    return await res.json();
  },
};