import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPharmacistComponent } from './register-pharmacist.component';

describe('RegisterPharmacistComponent', () => {
  let component: RegisterPharmacistComponent;
  let fixture: ComponentFixture<RegisterPharmacistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPharmacistComponent]
    });
    fixture = TestBed.createComponent(RegisterPharmacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
