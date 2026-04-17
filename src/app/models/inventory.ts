import { Medicine } from './medicine';
 
export interface Inventory {
  id: number;
  medicineId: number;
  quantityInStock: number;
  reorderLevel: number;
  maxStockLevel: number;
  expiryDate?: string;
  batchNumber: string;
  lastUpdated: string;
  medicine?: Medicine;
}