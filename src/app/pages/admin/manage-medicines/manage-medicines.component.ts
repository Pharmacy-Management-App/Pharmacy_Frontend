// src/app/pages/admin/manage-medicines/manage-medicines.component.ts
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminService } from "../../../services/admin.service";

@Component({
  selector: "app-manage-medicines",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: "./manage-medicines.component.html",
  styleUrls: ["./manage-medicines.component.css"]
})
export class ManageMedicinesComponent implements OnInit {
  medicines: any[] = [];
  loading = true;
  message = "";
  showForm = false;
  newMedicine: any = {
    name: "", genericName: "", manufacturer: "", description: "",
    price: 0, dosageForm: "", strength: "", requiresPrescription: false,
    categoryId: 1, isActive: true
  };

  constructor(private adminService: AdminService) {}

  ngOnInit() { this.load(); }

  load() {
    this.adminService.getMedicines().subscribe({
      next: d => { this.medicines = d; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  add() {
    this.adminService.addMedicine(this.newMedicine).subscribe({
      next: () => {
        this.message = "Medicine added successfully.";
        this.showForm = false;
        this.load();
        setTimeout(() => this.message = "", 3000);
      }
    });
  }

  toggle(id: number) {
    this.adminService.toggleMedicineStatus(id).subscribe({
      next: res => { this.message = res.message; this.load(); }
    });
  }
}
