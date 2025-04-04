

import { ActivatedRoute,} from '@angular/router';
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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-food-audit',
  imports: [CommonModule,
    RouterModule,
    RouterLink,
    ToolbarComponent,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './food-audit.component.html',
  styleUrl: './food-audit.component.scss'

})
export class FoodAuditComponent {

  
constructor(private route: ActivatedRoute) {
  const id = this.route.snapshot.paramMap.get('id');
  console.log('Premises ID:', id);
}

}
