import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-inspection',
  imports: [    CommonModule,
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
    MatInputModule],
  templateUrl: './inspection.component.html',
  styleUrl: './inspection.component.scss'
})
export class InspectionComponent implements OnInit {
  
  public route = inject(ActivatedRoute);

  public inspectionId: number | undefined;
  
  ngOnInit(): void {
    this.inspectionId = this.route.snapshot.params['id'];
  }

}
