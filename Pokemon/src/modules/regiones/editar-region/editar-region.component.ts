import { Component, Inject } from '@angular/core';
import { IRegiones } from 'src/models/iregiones';
import { RegionesService } from 'src/services/regiones.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-editar-region',
  templateUrl: './editar-region.component.html',
  styleUrls: ['./editar-region.component.css']
})
export class EditarRegionComponent {

  constructor(private regionesServices:RegionesService, public dialogRef: MatDialogRef<EditarRegionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

  actualizarRegion(id:string,nombreRegion:string){
    const region:IRegiones = {
      'id' : Number(id),
      'region_pokemon': nombreRegion
    }
    this.regionesServices.put(region)
    .subscribe(response=>{
      console.log(response)
    })

  }



}
