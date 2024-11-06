import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'order-config',
    loadComponent: () => import('./pages/order-config/order-config.page').then( m => m.OrderConfigPage)
  },
  {
    path: 'order-details',
    loadComponent: () => import('./pages/order-details/order-details.page').then( m => m.OrderDetailsPage)
  },
];
