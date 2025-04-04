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
    this.premisescolumns = ['premises', 'premisetypes', 'proprietor', 'auditor'];

    this.premises = [
      {
        premises: 'Kangaroo Island Eggs',
        premisetypes: 'Egg Processor',
        proprietor: 'Peter Pan',
        auditor: 'Tina Marie Aghiana'
      },
      {
        premises: 'Coffin Bay Oysers',
        premisetypes: 'Seafood Bivalve Mollusc',
        proprietor: 'Rodger Rabbit',
        auditor: 'Tina Marie Aghiana'
      }
    ];
  }
}