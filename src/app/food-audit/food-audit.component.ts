import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterLink, RouterModule } from '@angular/router';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TPremises } from '../types/premises';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatTabChangeEvent } from '@angular/material/tabs';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Premises ID:', id);
  }

  onTabChange(event: MatTabChangeEvent): void {
    // Index 4 is the "Inspections" tab
    if (event.index === 4) {
      this.router.navigate(['/inspection']);
    }

    if (event.index === 5) {
      this.router.navigate(['/inspectionschedule']);
    }

    if (event.index === 6) {
      this.router.navigate(['/contact']);
    }


  }
}