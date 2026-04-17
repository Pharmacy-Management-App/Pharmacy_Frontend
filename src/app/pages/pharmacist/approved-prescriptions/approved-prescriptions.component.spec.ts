import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedPrescriptionsComponent } from './approved-prescriptions.component';

describe('ApprovedPrescriptionsComponent', () => {
  let component: ApprovedPrescriptionsComponent;
  let fixture: ComponentFixture<ApprovedPrescriptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedPrescriptionsComponent]
    });
    fixture = TestBed.createComponent(ApprovedPrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
