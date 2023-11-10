import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { RegistrarPokemonComponent } from './registrar-pokemon/registrar-pokemon.component';
import { ListarPokemonComponent } from './listar-pokemon/listar-pokemon.component';


@NgModule({
  declarations: [
    RegistrarPokemonComponent,
    ListarPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
