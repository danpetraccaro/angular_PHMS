import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPremiseComponent } from './new-premise.component';

describe('NewPremiseComponent', () => {
  let component: NewPremiseComponent;
  let fixture: ComponentFixture<NewPremiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPremiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPremiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
