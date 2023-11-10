import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { RegistrarPokemonComponent } from './registrar-pokemon/registrar-pokemon.component';
import { ListarPokemonComponent } from './listar-pokemon/listar-pokemon.component';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    RegistrarPokemonComponent,
    ListarPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class PokemonModule { }
