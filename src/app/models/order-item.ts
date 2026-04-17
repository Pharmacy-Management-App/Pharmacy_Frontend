import { Medicine } from './medicine';
 
export interface OrderItem {
  id: number;
  orderId: number;
  medicineId: number;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  createdAt: string;
  medicine?: Medicine;
}