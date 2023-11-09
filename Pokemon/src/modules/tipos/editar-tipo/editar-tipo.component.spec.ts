import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoComponent } from './editar-tipo.component';

describe('EditarTipoComponent', () => {
  let component: EditarTipoComponent;
  let fixture: ComponentFixture<EditarTipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTipoComponent]
    });
    fixture = TestBed.createComponent(EditarTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
