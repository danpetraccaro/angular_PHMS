import { Routes } from '@angular/router';
import { FoodSurveillanceComponent } from './app/food-surveillance/food-surveillance.component';
import { FoodAuditComponent } from './app/food-audit/food-audit.component';
import { HomeComponent } from './app/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'surveillance', component: FoodSurveillanceComponent },
  { path: 'audit', component: FoodAuditComponent }
];