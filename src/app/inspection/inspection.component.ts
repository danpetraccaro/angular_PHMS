import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inspection',
  imports: [CommonModule,
    RouterModule],
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
