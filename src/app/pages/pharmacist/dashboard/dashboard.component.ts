// src/app/pages/pharmacist/dashboard/dashboard.component.ts
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PrescriptionService } from "../../../services/prescription.service";

@Component({
  selector: "app-pharmacist-dashboard",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  pending: any[] = [];
  approved: any[] = [];
  loading = true;

  constructor(private prescriptionService: PrescriptionService) {}

  ngOnInit() {
    this.prescriptionService.getPending().subscribe({
      next: d => {
        this.pending = d;
        this.prescriptionService.getApproved().subscribe({
          next: a => { this.approved = a; this.loading = false; },
          error: () => { this.loading = false; }
        });
      },
      error: () => { this.loading = false; }
    });
  }
}
