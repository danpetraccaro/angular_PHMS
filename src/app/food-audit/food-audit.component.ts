import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { InspectionComponent } from '../inspection-list/inspection-list.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-food-audit',
  standalone: true,
  imports: [
    CommonModule,
    InspectionComponent,
    RouterModule,
    RouterLink,
    ToolbarComponent,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './food-audit.component.html',
  styleUrl: './food-audit.component.scss'
})
export class FoodAuditComponent { 

private route = inject(ActivatedRoute);

  constructor( ) {
    const id = this.route.snapshot.paramMap.get('id');
  }

}