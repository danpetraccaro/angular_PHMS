import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-inspection',
  standalone: true,
  imports: [
    CommonModule,
  RouterModule,
  ToolbarComponent,     // ✅ assuming ToolbarComponent is standalone
  MatToolbarModule,
  MatTabsModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatInputModule,
  RouterLink   
  ],
  templateUrl: './inspectionschdule.component.html',
  styleUrls: ['./inspectionschedule.component.scss'] // ✅ Fixed here
})


export class InspectionScheduleComponent {
  constructor(private router: Router) {}

  onTabChange(event: MatTabChangeEvent): void {
    if (event.index === 0 && this.router.url !== '/food-audit') {
      this.router.navigate(['/food-audit']);
    }

    if (event.index === 4 && this.router.url !== '/inspection') {
      this.router.navigate(['/inspection']);
    }
  }
}