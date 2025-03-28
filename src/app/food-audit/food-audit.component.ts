import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component'; // Adjust the path as needed

// Import Angular Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


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
    MatIconModule
  ],
  templateUrl: './food-audit.component.html',
  styleUrls: ['./food-audit.component.scss']
})
export class FoodAuditComponent {
  // Component logic here
}