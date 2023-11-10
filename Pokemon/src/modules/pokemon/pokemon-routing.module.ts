import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPokemonComponent } from './listar-pokemon/listar-pokemon.component';

const routes: Routes = [
  {path:"listar", component:ListarPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
