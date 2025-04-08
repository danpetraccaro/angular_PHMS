import { CommonModule, getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink, RouterModule } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component'; // Adjust the path as needed
// Import Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TPremises } from '../types/premises';


@Component({
  selector: 'app-food-audit',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    ToolbarComponent,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './food-audit-home.component.html',
  styleUrls: ['./food-audit-home.component.scss']
})

// OBJECT
export class FoodAuditHomeComponent {

  // PROPERTIES
  public premisescolumns: string[];
  public premises: TPremises[];

  // CONSTRUCTOR
  constructor() {
    this.premisescolumns = ['premises', 'premisetypes', 'council', 'proprietor'];

    this.premises = [
      {
        premises: 'Kangaroo Island Eggs',
        premisetypes: 'Egg Processor',
        council: 'charles sturt',
        proprietor: 'Kangaroo Island Egg Corporation'
      },
      {
        premises: 'Southern Coffin Bay Oysers',
        premisetypes: 'Seafood Bivalve Mollusc',
        council: 'copper coast',
        proprietor: 'Kangaroo Island Egg Corporation'
      }
      
    ];
  }
}