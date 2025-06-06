import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-auditor',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatIconModule],
  templateUrl: './auditor.component.html',
  styleUrls: ['./auditor.component.scss']
})
export class AuditorComponent {
  groupedData = [
    {
      group: 'Renewal 2',
      expanded: false,
      rows: [
        { requirement: 'Auditor Certification', completedDate: '', policeClearanceDate: '' },
        { requirement: 'Skills Examination', completedDate: '', policeClearanceDate: '' },
        { requirement: 'SA Health Auditor Approval', completedDate: '', policeClearanceDate: '' }
      ]
    },
    {
      group: 'Renewal 1',
      expanded: false,
      rows: [
        { requirement: 'Auditor Certification', completedDate: '24/02/2025', policeClearanceDate: '' },
        { requirement: 'Skills Examination', completedDate: '24/02/2025', policeClearanceDate: '' },
        { requirement: 'SA Health Auditor Approval', completedDate: '24/02/2025', policeClearanceDate: '' }
      ]
    },
    {
      group: 'Initial Certification',
      expanded: false,
      rows: [
        { requirement: 'Lead Food Safety Auditor Course', completedDate: '20/02/2021', policeClearanceDate: '' },
        { requirement: 'Auditor Certification Application', completedDate: '24/02/2021', policeClearanceDate: '' },
        { requirement: 'Skills Examination', completedDate: '02/03/2021', policeClearanceDate: '' },
        { requirement: 'Auditor Certification', completedDate: '03/03/2021', policeClearanceDate: '' },
        { requirement: 'SA Health Auditor Approval', completedDate: '11/03/2021', policeClearanceDate: '15/03/2025' }
      ]
    }
  ];

  toggleGroup(group: any): void {
    group.expanded = !group.expanded;
  }
}