import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPokemonComponent } from './registrar-pokemon.component';

describe('RegistrarPokemonComponent', () => {
  let component: RegistrarPokemonComponent;
  let fixture: ComponentFixture<RegistrarPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPokemonComponent]
    });
    fixture = TestBed.createComponent(RegistrarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
