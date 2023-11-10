import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPokemonComponent } from './listar-pokemon/listar-pokemon.component';
import { RegistrarRegionComponent } from '../regiones/registrar-region/registrar-region.component';

const routes: Routes = [
  {path:"listar", component:ListarPokemonComponent},
  {path:"crear", component:RegistrarRegionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
