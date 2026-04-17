import { User } from './user';
 
export interface Pharmacist {
  id: number;
  userId: number;
  licenseNumber: string;
  qualification: string;
  specialization: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  profileImagePath?: string;
  joinedAt: string;
  approvedAt?: string;
  user?: User;
}