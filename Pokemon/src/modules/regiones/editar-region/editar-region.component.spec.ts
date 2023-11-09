import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRegionComponent } from './editar-region.component';

describe('EditarRegionComponent', () => {
  let component: EditarRegionComponent;
  let fixture: ComponentFixture<EditarRegionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarRegionComponent]
    });
    fixture = TestBed.createComponent(EditarRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
