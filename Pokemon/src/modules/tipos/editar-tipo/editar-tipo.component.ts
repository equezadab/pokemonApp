import { Component, Inject } from '@angular/core';
import { Itipos } from 'src/models/itipos';
import { TiposService } from 'src/services/tipos.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-tipo',
  templateUrl: './editar-tipo.component.html',
  styleUrls: ['./editar-tipo.component.css']
})
export class EditarTipoComponent {
  constructor(private tiposService:TiposService, public dialogRef: MatDialogRef<EditarTipoComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any){}

  actualizarTipo(id:string, nombre_tipo:string){
    const tipos:Itipos = {
      'id': Number(id),
      'nombre_tipo': nombre_tipo
    }
    this.tiposService.put(tipos)
    .subscribe(response=>{
      console.log(response) 
      this.dialogRef.close()
    })

  }

}
