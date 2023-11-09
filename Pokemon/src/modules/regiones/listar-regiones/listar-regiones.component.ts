import { Component, OnInit} from '@angular/core';
import {RegionesService} from "../../../services/regiones.service";
import { IRegiones } from 'src/models/iregiones';
import {MatDialog } from '@angular/material/dialog';
import { EditarRegionComponent } from '../editar-region/editar-region.component';

@Component({
  selector: 'app-listar-regiones',
  templateUrl: './listar-regiones.component.html',
  styleUrls: ['./listar-regiones.component.css']
})
export class ListarRegionesComponent implements OnInit {

  regiones: IRegiones[] = []; // Define la matriz de regiones
  displayedColumns: string[] = ["id","name","botones","botonPut"]
 
  constructor(private regionesServices: RegionesService, private dialog:MatDialog) {}

  obtenerRegiones(){
    this.regionesServices.getAll()
      .subscribe(response=>{
        response.forEach(region=>{
          this.regiones = response
          console.log(region)
        })
      })
  }

  borrarRegiones(region:any){
    this.regionesServices.delete(region[0])
    .subscribe(response=>{
      console.log(response)
      location.reload()  // para recargar la pagina
    })
  }

  editarRegion(id:string, nombre:string){
    const region:IRegiones{
      'id' : Number(id),
      'region_pokemon': nombre
    }
    const dialog = this.dialog.open(EditarRegionComponent, {data: {id:region[0], nombre:region[1]}})
  }

  ngOnInit() {
    this.obtenerRegiones();
  }
}
