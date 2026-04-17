import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePharmacistsComponent } from './manage-pharmacists.component';

describe('ManagePharmacistsComponent', () => {
  let component: ManagePharmacistsComponent;
  let fixture: ComponentFixture<ManagePharmacistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagePharmacistsComponent]
    });
    fixture = TestBed.createComponent(ManagePharmacistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
