import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-new-premise',
  standalone: true,
  templateUrl: './new-premise.component.html',
  styleUrls: ['./new-premise.component.scss'],
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class NewPremiseComponent {
  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<NewPremiseComponent>,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      nextInspection: ['', Validators.required],
      incidentDate: [new Date(), Validators.required],
      nextAuditDate: [null, Validators.required]  // ✅ changed from incidentDatePicker
    });

    this.editForm.get('nextInspection')?.valueChanges.subscribe(value => {
      const today = new Date();
      let offsetDays = 0;

      switch (value) {
        case 'Scheduled Audit (3 months)':
          offsetDays = 90;
          break;
        case 'Scheduled Audit (6 months)':
          offsetDays = 180;
          break;
        case 'Scheduled Audit (12 months)':
          offsetDays = 365;
          break;
        default:
          offsetDays = 0;
      }

      const nextAuditDate = new Date(today);
      nextAuditDate.setDate(today.getDate() + offsetDays);

      this.editForm.get('nextAuditDate')?.setValue(offsetDays ? nextAuditDate : null);
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      console.log(this.editForm.value);
      this.dialogRef.close(this.editForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}