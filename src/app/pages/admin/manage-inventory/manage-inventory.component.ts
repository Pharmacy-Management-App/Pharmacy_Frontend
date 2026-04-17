// src/app/pages/admin/manage-inventory/manage-inventory.component.ts
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminService } from "../../../services/admin.service";

@Component({
  selector: "app-manage-inventory",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: "./manage-inventory.component.html",
  styleUrls: ["./manage-inventory.component.css"]
})
export class ManageInventoryComponent implements OnInit {
  inventory: any[] = [];
  loading = true;
  message = "";
  editId: number | null = null;
  editQty = 0;

  constructor(private adminService: AdminService) {}

  ngOnInit() { this.load(); }

  load() {
    this.adminService.getInventory().subscribe({
      next: d => { this.inventory = d; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  startEdit(item: any) { this.editId = item.medicineId; this.editQty = item.quantityInStock; }

  saveEdit(medicineId: number) {
    this.adminService.updateInventory(medicineId, this.editQty).subscribe({
      next: res => {
        this.message = res.message;
        this.editId = null;
        this.load();
        setTimeout(() => this.message = "", 3000);
      }
    });
  }
}
