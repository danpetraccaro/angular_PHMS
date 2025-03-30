import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component'; // Adjust the path as needed
import { MatFormField } from '@angular/material/form-field';

// Import Angular Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-food-audit',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    ToolbarComponent,
    MatSidenavModule, // Import MatSidenavModule here
    MatListModule,
    MatIconModule,
    MatFormField,
    MatCardModule
  ],
  templateUrl: './food-audit.component.html',
  styleUrls: ['./food-audit.component.scss']
})
export class FoodAuditComponent {
  // Component logic here
}