import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-inspection',
  standalone: true,
  templateUrl: './new-inspection.component.html',
  styleUrls: ['./new-inspection.component.scss'],
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class NewInspectionComponent {
  nextInspection = 'weekly';
  auditDate: Date | null = null;
  nextAuditDate: Date | null = null;

  constructor(private dialogRef: MatDialogRef<NewInspectionComponent>) {}

  submit(): void {
    console.log({
      nextInspection: this.nextInspection,
      auditDate: this.auditDate,
      nextAuditDate: this.nextAuditDate
    });
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}