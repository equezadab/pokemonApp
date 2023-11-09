import { EditarTipoComponent } from './../editar-tipo/editar-tipo.component';
import { Component, OnInit } from '@angular/core';
import { Itipos } from 'src/models/itipos';
import { TiposService } from 'src/services/tipos.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listar-tipos',
  templateUrl: './listar-tipos.component.html',
  styleUrls: ['./listar-tipos.component.css']
})
export class ListarTiposComponent implements OnInit {
  tipos:Itipos[]=[]
  displayedColumns: string[] = ["id","name","botones","botonPut"]

  constructor (private tiposService:TiposService, private dialog:MatDialog){}

  obtenerTipos(){
    this.tiposService.getAll()
    .subscribe(response=>{
      response.forEach(tipos=>{
        this.tipos=response
        console.log(response)
      })
    })
  }

  ngOnInit(){
    this.obtenerTipos();
  }

  borrarTipos(tipos:any){
    this.tiposService.delete(tipos[0])
    .subscribe(response=>{
      console.log(response)
      location.reload()
    })
  }

  editarTipos(id:string, nombre:string){
    const dialog = this.dialog.open(EditarTipoComponent, {data: {id:id, nombre:nombre}})
    dialog.afterClosed().subscribe(result => {
    location.reload()
    }
    )
  }
}


