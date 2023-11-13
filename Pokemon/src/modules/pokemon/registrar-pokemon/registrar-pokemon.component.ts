import { IRegiones } from 'src/models/iregiones';
import {Component, OnInit} from '@angular/core';
import { Ipokemon } from 'src/models/ipokemon';
import { PokemonesService } from 'src/services/pokemones.service';
import { RegionesService } from 'src/services/regiones.service';
import {TiposService} from "../../../services/tipos.service";
import {Itipos} from "../../../models/itipos";


@Component({
  selector: 'app-registrar-pokemon',
  templateUrl: './registrar-pokemon.component.html',
  styleUrls: ['./registrar-pokemon.component.css']
})
export class RegistrarPokemonComponent implements OnInit{
  lista_regiones:IRegiones[] = []
  lista_tipos:Itipos[] = []
  constructor(private pokemonesServices:PokemonesService, private regionesServices:RegionesService, private tiposService:TiposService){}

  obtenerRegiones(){
    this.regionesServices.getAll()
      .subscribe(regiones =>{
        this.lista_regiones = regiones
        console.log(this.lista_regiones)
      })
  }

  obtenerTipos(){
    this.tiposService.getAll()
      .subscribe(tipos => {
        this.lista_tipos = tipos
      })
  }

  crearPokemon(nombre_p:string, nombre_r:any, nombre_tipo:any){

  }

  ngOnInit() {
    this.obtenerTipos()
    this.obtenerRegiones()
  }
}
