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
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.scss'] // ✅ Fixed here
})


@Component({
  selector: 'app-inspection',
  standalone: true,
  // your existing imports...
})
export class InspectionComponent {
  constructor(private router: Router) {}

  onTabChange(event: MatTabChangeEvent): void {
    // Index 0 is the "Details" tab
    if (event.index === 0) {
      this.router.navigate(['/food-audit']);
    }

    // Index 5 is the "Inspection Schedule"
    if (event.index === 5) {
      this.router.navigate(['/inspectionschedule']);
    }

    // Add other tab indexes/routes as needed
  }
}


