import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionesRoutingModule } from './regiones-routing.module';
import { RegistrarRegionComponent } from './registrar-region/registrar-region.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import { ListarRegionesComponent } from './listar-regiones/listar-regiones.component';
import {MatTableModule} from '@angular/material/table';
import { EditarRegionComponent } from './editar-region/editar-region.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RegistrarRegionComponent,
    ListarRegionesComponent,
    EditarRegionComponent,


  ],
    imports: [
        CommonModule,
        RegionesRoutingModule,
        MatButtonToggleModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
        FormsModule
    ]
})
export class RegionesModule { }
