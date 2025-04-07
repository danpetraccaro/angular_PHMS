import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionscheduleComponent } from './inspectionschedule.component';

describe('InspectionscheduleComponent', () => {
  let component: InspectionscheduleComponent;
  let fixture: ComponentFixture<InspectionscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectionscheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
