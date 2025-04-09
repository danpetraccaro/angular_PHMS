import { Routes } from '@angular/router';
import { FoodSurveillanceComponent } from './app/food-surveillance/food-surveillance.component';
import { HomeComponent } from './app/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'surveillance', component: FoodSurveillanceComponent },
  { path: 'audit', loadComponent: () => import('./app/food-audit-home/food-audit-home.component').then(c => c.FoodAuditHomeComponent) },
  { path: 'premise', loadComponent: () => import('./app/food-audit/food-audit.component').then(c => c.FoodAuditComponent) },
  { path: 'contact', loadComponent: () => import('./app/contact/contact.component').then(m => m.ContactComponent) }, 
  { path: 'inspection/:id', loadComponent: () => import('./app/inspection/inspection.component').then(c => c.InspectionComponent) }
];