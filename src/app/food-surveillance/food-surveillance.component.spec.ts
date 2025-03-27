import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSurveillanceComponent } from './food-surveillance.component';

describe('FoodSurveillanceComponent', () => {
  let component: FoodSurveillanceComponent;
  let fixture: ComponentFixture<FoodSurveillanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodSurveillanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodSurveillanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
