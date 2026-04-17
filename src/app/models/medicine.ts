import { Category } from './category';
 
export interface Medicine {
  id: number;
  categoryId: number;
  name: string;
  genericName: string;
  manufacturer: string;
  description: string;
  price: number;
  dosageForm: string;
  strength: string;
  requiresPrescription: boolean;
  imagePath?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt?: string;
  category?: Category;
}