// src/app/pages/admin/manage-users/manage-users.component.ts
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AdminService } from "../../../services/admin.service";

@Component({
  selector: "app-manage-users",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./manage-users.component.html",
  styleUrls: ["./manage-users.component.css"]
})
export class ManageUsersComponent implements OnInit {
  users: any[] = [];
  loading = true;
  message = "";

  constructor(private adminService: AdminService) {}

  ngOnInit() { this.loadUsers(); }

  loadUsers() {
    this.adminService.getUsers().subscribe({
      next: data => { this.users = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  toggle(id: number) {
    this.adminService.toggleUserStatus(id).subscribe({
      next: res => {
        this.message = res.message;
        this.loadUsers();
        setTimeout(() => this.message = "", 3000);
      }
    });
  }
}
