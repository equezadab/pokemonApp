import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarRegionComponent } from './registrar-region/registrar-region.component';
import {ListarRegionesComponent} from "./listar-regiones/listar-regiones.component";

const routes: Routes = [
  {path: "crear", component:RegistrarRegionComponent},
  {path: "listar", component:ListarRegionesComponent}
];

export const regionesRouting = RouterModule.forChild(routes)

@NgModule({
  imports: [regionesRouting],
  exports: [RouterModule]
})
export class RegionesRoutingModule { }
