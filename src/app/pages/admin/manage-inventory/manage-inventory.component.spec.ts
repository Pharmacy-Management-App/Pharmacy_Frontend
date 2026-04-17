import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInventoryComponent } from './manage-inventory.component';

describe('ManageInventoryComponent', () => {
  let component: ManageInventoryComponent;
  let fixture: ComponentFixture<ManageInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageInventoryComponent]
    });
    fixture = TestBed.createComponent(ManageInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
