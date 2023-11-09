import { TiposService } from './../../../services/tipos.service';
import { Component } from '@angular/core';
import { Itipos } from 'src/models/itipos';

@Component({
  selector: 'app-registrar-tipo',
  templateUrl: './registrar-tipo.component.html',
  styleUrls: ['./registrar-tipo.component.css']
})
export class RegistrarTipoComponent {
  constructor(private tiposService:TiposService){}

     registrarTipo(nombre_tipo:string){
      const tipos:Itipos = {
        'nombre_tipo' : nombre_tipo
      } 
      this.tiposService.post(tipos)
      .subscribe(response=>{
        console.log(response)
      })
     

  }

}
