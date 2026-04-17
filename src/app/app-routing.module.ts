import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [

  // ============================================================
  // PUBLIC ROUTES
  // ============================================================
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login.component')
        .then(m => m.LoginComponent)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./pages/auth/register-customer/register-customer.component')
        .then(m => m.RegisterCustomerComponent)
  },

  {
    path: 'register-pharmacist',
    loadComponent: () =>
      import('./pages/auth/register-pharmacist/register-pharmacist.component')
        .then(m => m.RegisterPharmacistComponent)
  },

  // ============================================================
  // CUSTOMER ROUTES (Auth Required)
  // ============================================================
  {
    path: 'customer',
    // canActivate: [AuthGuard, RoleGuard],
    // data: { roles: ['Customer'] },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/customer/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },
      {
        path: 'medicines',
        loadComponent: () =>
          import('./pages/customer/medicines/medicines.component')
            .then(m => m.MedicinesComponent)
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/customer/cart/cart.component')
            .then(m => m.CartComponent)
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./pages/customer/orders/orders.component')
            .then(m => m.OrdersComponent)
      },
      {
        path: 'upload-prescription',
        loadComponent: () =>
          import('./pages/customer/upload-prescription/upload-prescription.component')
            .then(m => m.UploadPrescriptionComponent)
      }
    ]
  },

  // ============================================================
  // PHARMACIST ROUTES (Auth + Role Required)
  // ============================================================
  {
    path: 'pharmacist',
    // canActivate: [AuthGuard, RoleGuard],
    // data: { roles: ['Pharmacist'] },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/pharmacist/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },
      {
        path: 'pending-prescriptions',
        loadComponent: () =>
          import('./pages/pharmacist/pending-prescriptions/pending-prescriptions.component')
            .then(m => m.PendingPrescriptionsComponent)
      },
      {
        path: 'approved-prescriptions',
        loadComponent: () =>
          import('./pages/pharmacist/approved-prescriptions/approved-prescriptions.component')
            .then(m => m.ApprovedPrescriptionsComponent)
      }
    ]
  },

  // ============================================================
  // ADMIN ROUTES (Auth + Role Required)
  // ============================================================
  {
    path: 'admin',
    // canActivate: [AuthGuard, RoleGuard],
    // data: { roles: ['Admin'] },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/admin/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },
      {
        path: 'manage-users',
        loadComponent: () =>
          import('./pages/admin/manage-users/manage-users.component')
            .then(m => m.ManageUsersComponent)
      },
      {
        path: 'manage-pharmacists',
        loadComponent: () =>
          import('./pages/admin/manage-pharmacists/manage-pharmacists.component')
            .then(m => m.ManagePharmacistsComponent)
      },
      {
        path: 'manage-medicines',
        loadComponent: () =>
          import('./pages/admin/manage-medicines/manage-medicines.component')
            .then(m => m.ManageMedicinesComponent)
      },
      {
        path: 'manage-inventory',
        loadComponent: () =>
          import('./pages/admin/manage-inventory/manage-inventory.component')
            .then(m => m.ManageInventoryComponent)
      }
    ]
  },

  // ============================================================
  // FALLBACK ROUTES
  // ============================================================
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./pages/auth/login/login.component')  // redirect to login (no separate unauthorized page in your structure)
        .then(m => m.LoginComponent)
  },
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}