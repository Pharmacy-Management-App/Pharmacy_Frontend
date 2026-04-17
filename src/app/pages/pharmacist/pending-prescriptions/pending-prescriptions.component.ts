// src/app/pages/pharmacist/pending-prescriptions/pending-prescriptions.component.ts
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PrescriptionService } from "../../../services/prescription.service";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-pending-prescriptions",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: "./pending-prescriptions.component.html",
  styleUrls: ["./pending-prescriptions.component.css"]
})
export class PendingPrescriptionsComponent implements OnInit {
  prescriptions: any[] = [];
  loading = true;
  message = "";
  notes: { [key: number]: string } = {};
  apiBase = environment.apiUrl.replace("/api", "");

  constructor(private prescriptionService: PrescriptionService) {}

  ngOnInit() { this.load(); }

  load() {
    this.prescriptionService.getPending().subscribe({
      next: d => { this.prescriptions = d; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  approve(id: number) {
    this.prescriptionService.approve(id, this.notes[id] || "").subscribe({
      next: res => { this.message = res.message; this.load(); }
    });
  }

  reject(id: number) {
    this.prescriptionService.reject(id, this.notes[id] || "").subscribe({
      next: res => { this.message = res.message; this.load(); }
    });
  }
}
