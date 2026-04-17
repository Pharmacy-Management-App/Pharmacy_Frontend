import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPrescriptionsComponent } from './pending-prescriptions.component';

describe('PendingPrescriptionsComponent', () => {
  let component: PendingPrescriptionsComponent;
  let fixture: ComponentFixture<PendingPrescriptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingPrescriptionsComponent]
    });
    fixture = TestBed.createComponent(PendingPrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
