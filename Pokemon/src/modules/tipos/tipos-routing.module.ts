import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarTipoComponent } from './registrar-tipo/registrar-tipo.component';
import { ListarTiposComponent } from './listar-tipos/listar-tipos.component';


const routes: Routes = [
  {path: 'crear', component: RegistrarTipoComponent},
  {path: 'listar', component:ListarTiposComponent}
];

export const tiposRouting = RouterModule.forChild(routes)

@NgModule({
  imports: [tiposRouting],
  exports: [RouterModule]
})
export class TiposRoutingModule { }
