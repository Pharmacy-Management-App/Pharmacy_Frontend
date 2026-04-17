import { Component, OnInit } from '@angular/core';

interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  role: string | null = '';
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.setMenu();
  }

  setMenu() {
    if (this.role === 'Admin') {
      this.menuItems = [
        { label: 'Dashboard', route: '/admin/dashboard' },
        { label: 'Users', route: '/admin/manage-users' },
        { label: 'Pharmacists', route: '/admin/manage-pharmacists' },
        { label: 'Medicines', route: '/admin/manage-medicines' },
        { label: 'Inventory', route: '/admin/manage-inventory' }
      ];
    }

    else if (this.role === 'Pharmacist') {
      this.menuItems = [
        { label: 'Dashboard', route: '/pharmacist/dashboard' },
        { label: 'Pending Prescriptions', route: '/pharmacist/pending-prescriptions' },
        { label: 'Approved Prescriptions', route: '/pharmacist/approved-prescriptions' }
      ];
    }

    else {
      this.menuItems = [
        { label: 'Dashboard', route: '/customer/dashboard' },
        { label: 'Medicines', route: '/customer/medicines' },
        { label: 'Cart', route: '/customer/cart' },
        { label: 'Orders', route: '/customer/orders' },
        { label: 'Upload Prescription', route: '/customer/upload-prescription' }
      ];
    }
  }
}