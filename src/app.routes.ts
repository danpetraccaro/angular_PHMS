import { Routes } from '@angular/router';
import { FoodSurveillanceComponent } from './food-surveillance/food-surveillance.component';
import { FoodAuditComponent } from './food-audit/food-audit.component';

export const routes: Routes = [
  { path: 'surveillance', component: FoodSurveillanceComponent },
  { path: 'audit', component: FoodAuditComponent },
  { path: '', redirectTo: '/surveillance', pathMatch: 'full' }
];