import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

import { InspectionComponent } from '../inspection-list/inspection-list.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-food-audit',
  standalone: true,
  templateUrl: './food-audit.component.html',
  styleUrl: './food-audit.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    InspectionComponent,
    ToolbarComponent,

    // Angular Material modules
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatMenuModule,
    MatDialogModule,
    MatToolbarModule
  ]
})
export class FoodAuditComponent {
  // ✅ Added title and icon fields for use in the template
  title = 'Kangaroo Island Eggs';
  icon = 'store';

  private route = inject(ActivatedRoute);

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Loaded Food Audit with ID:', id);
  }

  openMyDetails() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = 600;
    dialogConfig.maxWidth = 800;

    console.log('Opening My Details with config:', dialogConfig);
    // MatDialog logic would go here
  }

  openChangePassword() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = 200;
    dialogConfig.maxWidth = 400;

    console.log('Opening Change Password with config:', dialogConfig);
    // MatDialog logic would go here
  }

  openPowerBI() {
    console.log('Opening PowerBI Reports...');
    // Add actual logic if needed
  }

  logout() {
    console.log('Logging out...');
    // Add actual logic if needed
  }
}