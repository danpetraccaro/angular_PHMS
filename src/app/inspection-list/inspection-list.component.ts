import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-inspection-list',
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
  templateUrl: './inspection-list.component.html',
  styleUrls: ['./inspection-list.component.scss'] // ✅ Fixed here
})

export class InspectionComponent {


  public columns: string[] = ['id', 'auditor', 'auditDate', 'nextAuditDate'];

  public inspections: TInspections[] = [
    {
      auditor: 'Rodger Rabbit',
      auditDate: new Date(),
      nextAuditDate: new Date(2025, 6, 1),
      id: 1
    },
    {
      auditor: 'Buggs Bunny',
      auditDate: new Date(2025, 4, 9),
      nextAuditDate: new Date(),
      id: 2
    }
  ];
}


export type TInspections = {
  id: number,
  auditor: string,
  auditDate: Date,
  nextAuditDate: Date
}


