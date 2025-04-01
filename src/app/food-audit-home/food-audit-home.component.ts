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

export class FoodAuditHomeComponent {
  public premisescolumns: string[] = ['premises', 'premisetypes', 'createdby', 'createddate'];

  public premises: TPremises[] = [
    { premises: 'food', premisetypes: 'hospital', createdby: 'Peter Pan', createddate: '11/11/2024' },
    { premises: 'food2', premisetypes: 'hospital', createdby: 'Peter Pan', createddate: '11/11/2024'  }
    
  ];
}