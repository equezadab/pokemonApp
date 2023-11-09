import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTipoComponent } from './registrar-tipo.component';

describe('RegistrarTipoComponent', () => {
  let component: RegistrarTipoComponent;
  let fixture: ComponentFixture<RegistrarTipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarTipoComponent]
    });
    fixture = TestBed.createComponent(RegistrarTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
