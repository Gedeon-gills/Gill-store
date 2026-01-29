import api from './api';

export interface User {
  _id: string;
  name: string;
  email: string;
  role: "customer" | "admin";
  isActive: boolean;
  createdAt: string; // ISO date from backend
  updatedAt: string; // ISO date from backend
}

export interface UserResponse {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "customer" | "Vendor";
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    _id: string;
    name: string;
    email: string;
    role: "customer" | "vendor";
  };
}

// User-related API functions using the configured Axios instance
export const userService = {
  // GET all users
  getUsers: async (): Promise<UserResponse>=> {
    const response = await api.get('/auth');
    return response.data;
  },

  // GET single user
  getUser: async (id: string) => {
    const response = await api.get(`/auth/${id}`);
    return response.data;
  },

  // POST create user
  createUser: async (payload: CreateUserRequest) => {
    const response = await api.post("/auth/register", payload);
    return response.data;
  },

  login: async (payload: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post("/auth/login", payload);
    return response.data;
  },

  // PUT update user
  updateUser: async (id: string, userData: Partial<{ name: string; email: string; role: string }>) => {
    const response = await api.put(`/auth/${id}`, userData);
    return response.data;
  },

  // DELETE user
  deleteUser: async (id: string) => {
    const response = await api.delete(`/auth/${id}`);
    return response.data;
  },
};