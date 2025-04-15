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
  selector: 'app-new-inspection',
  standalone: true,
  templateUrl: './new-inspection.component.html',
  styleUrls: ['./new-inspection.component.scss'],
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
export class NewInspectionComponent {
  editForm: FormGroup;
  healthUnit = 'CHPL'; // or WWM
  categoryOpts = [
    { value: 'hygiene', viewValue: 'Hygiene' },
    { value: 'safety', viewValue: 'Safety' }
  ];
  subCategoryOpts = [
    { value: 'pest', viewValue: 'Pest Control' },
    { value: 'clean', viewValue: 'Cleanliness' }
  ];

  constructor(
    private dialogRef: MatDialogRef<NewInspectionComponent>,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      nextInspection: ['weekly', Validators.required],
      category: ['', Validators.required],
      subCategory: [''],
      incidentDate: [new Date(), Validators.required], // ✅ Default to today
      subject: ['', Validators.required],
      details: ['']
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