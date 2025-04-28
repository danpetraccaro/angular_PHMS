import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

export interface InspectionRow {
  council: string;
  tradingName: string;
  address: string;
}

const MOCK_DATA: InspectionRow[] = [
  {
    council: 'City of Onkaparinga',
    tradingName: 'Kangaroo Island Eggs',
    address: '23 Egg St, Kingston SA'
  }
  // add more rows if needed
];

@Component({
  selector: 'app-inspection',
  standalone: true,
  templateUrl: './inspection.component.html',
  styleUrl: './inspection.component.scss',
  imports: [
    /* Angular / Material modules that the template needs */
    CommonModule,
    RouterModule,
    RouterLink,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ]
})
export class InspectionComponent implements OnInit {

  private route = inject(ActivatedRoute);

  /** Column order for the MatTable (includes “council”) */
  displayedColumns: string[] = ['council', 'tradingName', 'address'];
  dataSource = new MatTableDataSource<InspectionRow>(MOCK_DATA);

  inspectionId!: number;

  ngOnInit(): void {
    this.inspectionId = Number(this.route.snapshot.params['id']);
  }
}