import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRegionesComponent } from './listar-regiones.component';

describe('ListarRegionesComponent', () => {
  let component: ListarRegionesComponent;
  let fixture: ComponentFixture<ListarRegionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarRegionesComponent]
    });
    fixture = TestBed.createComponent(ListarRegionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
