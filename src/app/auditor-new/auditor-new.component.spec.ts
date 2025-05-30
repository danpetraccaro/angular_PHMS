import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorNewComponent } from './auditor-new.component';

describe('AuditorNewComponent', () => {
  let component: AuditorNewComponent;
  let fixture: ComponentFixture<AuditorNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditorNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
