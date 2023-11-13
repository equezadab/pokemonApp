import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPokemonComponent } from './listar-pokemon/listar-pokemon.component';
import {RegistrarPokemonComponent} from "./registrar-pokemon/registrar-pokemon.component";

const routes: Routes = [
  {path:"listar", component:ListarPokemonComponent},
  {path:"crear", component:RegistrarPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
