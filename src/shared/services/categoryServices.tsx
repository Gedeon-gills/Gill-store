// services/userService.ts
import api from './api';
export interface Category {
  _id: string;
  name: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

export interface GetCategoriesResponse {
  message: string;
  categories: Category[];
}

// User-related API functions using the configured Axios instance
export const categoryService = {
  // GET all Categories
  getCategories: async (): Promise<GetCategoriesResponse> => {
    const response = await api.get('/categories', );
    return response.data;
  },

  // GET single category
  getCategory: async (id: string): Promise<GetCategoriesResponse> => {
    const response = await api.get(`/categories/${id}`);
    return response.data;
  },

  // POST create Category
  createCategory: async (userData: { name: string; email: string; role?: string }) => {
    const response = await api.post('/categories', userData);
    return response.data;
  },

  // PUT update Category
  updateCategory: async (id: string, userData: Partial<{ name: string; email: string; role: string }>) => {
    const response = await api.put(`/categories/${id}`, userData);
    return response.data;
  },

  // DELETE Category
  deleteCategory: async (id: string) => {
    const response = await api.delete(`/categories/${id}`);
    return response.data;
  },
};