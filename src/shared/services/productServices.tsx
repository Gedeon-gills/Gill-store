// services/userService.ts
import api from './api';
export interface product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  categoryId: number;
  inStock: boolean;
  quantity: number;
  images: string[]; // empty array now, ready for URLs later
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  __v: number;
}

export interface GetProductsResponse {
  products: product[];
}

export interface Product {
  _id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  inStock: boolean;
  quantity: number;
  images: string[]; // array of image URLs
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  __v: number;
}

export interface ProductResponse {
  product: Product;
}



// User-related API functions using the configured Axios instance
export const productServices = {
  // GET all Products
  getProducts: async (): Promise<GetProductsResponse> => {
    const response = await api.get('/products', );
    return response.data;
  },

  // GET single product
  getproduct: async (id: string): Promise<ProductResponse> => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  // POST create product
  createProduct: async (userData: { name: string; email: string; role?: string }) => {
    const response = await api.post('/products', userData);
    return response.data;
  },

  // PUT update product
  updateProduct: async (id: string, userData: Partial<{ name: string; email: string; role: string }>) => {
    const response = await api.put(`/products/${id}`, userData);
    return response.data;
  },

  // DELETE product
  deleteProduct: async (id: string) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },
};