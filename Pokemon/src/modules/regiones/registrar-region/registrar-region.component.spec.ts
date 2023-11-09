import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarRegionComponent } from './registrar-region.component';

describe('RegistrarRegionComponent', () => {
  let component: RegistrarRegionComponent;
  let fixture: ComponentFixture<RegistrarRegionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarRegionComponent]
    });
    fixture = TestBed.createComponent(RegistrarRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
