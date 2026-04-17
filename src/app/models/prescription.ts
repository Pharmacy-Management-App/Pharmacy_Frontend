export interface Prescription {
  id: number;
  userId: number;
  filePath: string;
  originalFileName: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  reviewedBy?: string;
  notes?: string;
  uploadedAt: string;
  reviewedAt?: string;
}