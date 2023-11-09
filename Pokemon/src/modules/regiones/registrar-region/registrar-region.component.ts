import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RegionesService} from "../../../services/regiones.service";
import {IRegiones} from "../../../models/iregiones";

@Component({
  selector: 'app-registrar-region',
  templateUrl: './registrar-region.component.html',
  styleUrls: ['./registrar-region.component.css']
})
export class RegistrarRegionComponent {
  constructor(private regionesServices:RegionesService) {}

  registrarRegion(nombre_region:string){
    const region:IRegiones = {
      'region_pokemon': nombre_region
    }
    this.regionesServices.post(region)
      .subscribe(response=>{
        console.log(response)
      })
  }
}

