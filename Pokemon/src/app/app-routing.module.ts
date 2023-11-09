import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"regiones",loadChildren:()=>import('../modules/regiones/regiones.module').then(m=>m.RegionesModule)},
  {path:"tipos", loadChildren:()=>import('../modules/tipos/tipos.module').then(m=>m.TiposModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
