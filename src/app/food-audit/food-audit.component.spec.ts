import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAuditComponent } from './food-audit.component';

describe('FoodAuditComponent', () => {
  let component: FoodAuditComponent;
  let fixture: ComponentFixture<FoodAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodAuditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
