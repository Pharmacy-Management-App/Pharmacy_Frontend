// src/app/services/prescription.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class PrescriptionService {
  private api = environment.apiUrl;
  constructor(private http: HttpClient) {}

  upload(file: File): Observable<any> {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`${this.api}/prescription/upload`, fd);
  }

  getPending(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/prescription/pending`);
  }

  getApproved(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/prescription/approved`);
  }

  getMyPrescriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/prescription/my`);
  }

  approve(prescriptionId: number, notes: string): Observable<any> {
    return this.http.put(`${this.api}/prescription/approve`,
      { prescriptionId, notes });
  }

  reject(prescriptionId: number, notes: string): Observable<any> {
    return this.http.put(`${this.api}/prescription/reject`,
      { prescriptionId, notes });
  }
}
