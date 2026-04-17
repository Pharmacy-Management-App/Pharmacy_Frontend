// src/app/pages/pharmacist/approved-prescriptions/approved-prescriptions.component.ts
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PrescriptionService } from "../../../services/prescription.service";

@Component({
  selector: "app-approved-prescriptions",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./approved-prescriptions.component.html",
  styleUrls: ["./approved-prescriptions.component.css"]
})
export class ApprovedPrescriptionsComponent implements OnInit {
  prescriptions: any[] = [];
  loading = true;

  constructor(private prescriptionService: PrescriptionService) {}

  ngOnInit() {
    this.prescriptionService.getApproved().subscribe({
      next: d => { this.prescriptions = d; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
