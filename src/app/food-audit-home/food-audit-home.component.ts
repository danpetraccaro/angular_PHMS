import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component'; // Adjust the path as needed
import { MatFormField } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
// Import Angular Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TPremise } from '../types/premise';



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
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './food-audit-home.component.html',
  styleUrls: ['./food-audit-home.component.scss']
})
export class FoodAuditHomeComponent {
  // Component logic here

  public tableColumns: string[] = ['id'];


  public premises: TPremise[] = [{
    id: 1
  },
  {
    id: 2
  }]
}