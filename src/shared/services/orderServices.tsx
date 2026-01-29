import api from './api';

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: number;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: string;
  status: string;
  isPaid: boolean;
}

export interface GetOrdersResponse {
  message: string;
  orders: Order[];
}

export interface CreateOrderPayload {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  items: { productId: string; quantity: number }[];
}

export const orderServices = {
  // GET all orders
  getOrders: async (): Promise<GetOrdersResponse> => {
    const response = await api.get('/orders');
    return response.data;
  },

  // POST create order
  createOrder: async (payload: CreateOrderPayload): Promise<Order> => {
    const response = await api.post('/orders', payload);
    return response.data.order; // returns the created order object
  },
};