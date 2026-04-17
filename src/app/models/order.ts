import { User } from './user';
import { Prescription } from './prescription';
import { OrderItem } from './order-item';
 
export interface Order {
  id: number;
  userId: number;
  prescriptionId?: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  totalAmount: number;
  deliveryAddress: string;
  paymentMethod: string;
  paymentStatus: 'Unpaid' | 'Paid' | 'Refunded';
  notes?: string;
  orderedAt: string;
  deliveredAt?: string;
  user?: User;
  prescription?: Prescription;
  orderItems?: OrderItem[];
}