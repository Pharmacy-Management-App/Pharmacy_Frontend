export interface User {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  role: 'Admin' | 'Pharmacist' | 'Customer';
  isEmailVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt?: string;
}