import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposRoutingModule } from './tipos-routing.module';
import { RegistrarTipoComponent } from './registrar-tipo/registrar-tipo.component';

import {MatInputModule} from '@angular/material/input';
import { ListarTiposComponent } from './listar-tipos/listar-tipos.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { EditarTipoComponent } from './editar-tipo/editar-tipo.component';
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    RegistrarTipoComponent,
    ListarTiposComponent,
    EditarTipoComponent
  ],
  imports: [
    CommonModule,
    TiposRoutingModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
  ]
})
export class TiposModule { }
