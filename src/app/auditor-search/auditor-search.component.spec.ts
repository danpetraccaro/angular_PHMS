import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorSearchComponent } from './auditor-search.component';

describe('AuditorSearchComponent', () => {
  let component: AuditorSearchComponent;
  let fixture: ComponentFixture<AuditorSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditorSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
