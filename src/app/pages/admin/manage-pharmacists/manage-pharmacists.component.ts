// src/app/pages/admin/manage-pharmacists/manage-pharmacists.component.ts
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AdminService } from "../../../services/admin.service";

@Component({
  selector: "app-manage-pharmacists",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./manage-pharmacists.component.html",
  styleUrls: ["./manage-pharmacists.component.css"]
})
export class ManagePharmacistsComponent implements OnInit {
  pharmacists: any[] = [];
  loading = true;
  message = "";
  filter: "all" | "pending" = "all";

  constructor(private adminService: AdminService) {}

  ngOnInit() { this.loadAll(); }

  loadAll() {
    this.loading = true;
    const call = this.filter === "pending"
      ? this.adminService.getPendingPharmacists()
      : this.adminService.getPharmacists();
    call.subscribe({
      next: data => { this.pharmacists = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  approve(id: number) {
    this.adminService.approvePharmacist(id).subscribe({
      next: res => { this.message = res.message; this.loadAll(); }
    });
  }

  reject(id: number) {
    this.adminService.rejectPharmacist(id).subscribe({
      next: res => { this.message = res.message; this.loadAll(); }
    });
  }

  setFilter(f: "all" | "pending") { this.filter = f; this.loadAll(); }
}
