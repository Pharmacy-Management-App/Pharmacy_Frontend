// src/app/services/admin.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class AdminService {
  private api = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getDashboard(): Observable<any> {
    return this.http.get(`${this.api}/admin/dashboard`);
  }

  // Users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/admin/users`);
  }
  toggleUserStatus(id: number): Observable<any> {
    return this.http.put(`${this.api}/admin/users/${id}/toggle-status`, {});
  }

  // Pharmacists
  getPharmacists(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/admin/pharmacists`);
  }
  getPendingPharmacists(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/admin/pharmacists/pending`);
  }
  approvePharmacist(id: number): Observable<any> {
    return this.http.put(`${this.api}/admin/pharmacists/${id}/approve`, {});
  }
  rejectPharmacist(id: number): Observable<any> {
    return this.http.put(`${this.api}/admin/pharmacists/${id}/reject`, {});
  }

  // Medicines
  getMedicines(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/admin/medicines`);
  }
  addMedicine(medicine: any): Observable<any> {
    return this.http.post(`${this.api}/admin/medicines`, medicine);
  }
  toggleMedicineStatus(id: number): Observable<any> {
    return this.http.put(`${this.api}/admin/medicines/${id}/toggle-status`, {});
  }

  // Inventory
  getInventory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/admin/inventory`);
  }
  updateInventory(medicineId: number, quantity: number): Observable<any> {
    return this.http.put(`${this.api}/admin/inventory/${medicineId}`, quantity);
  }
}
