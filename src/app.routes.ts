import { Routes } from '@angular/router';
import { FoodSurveillanceComponent } from './app/food-surveillance/food-surveillance.component';
import { HomeComponent } from './app/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'surveillance', component: FoodSurveillanceComponent },
  { path: 'audit', loadComponent: () => import('./app/food-audit-home/food-audit-home.component').then(c => c.FoodAuditHomeComponent) }
];