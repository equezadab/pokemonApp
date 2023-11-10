import { IRegiones } from 'src/models/iregiones';
import { Component } from '@angular/core';
import { Ipokemon } from 'src/models/ipokemon';
import { PokemonesService } from 'src/services/pokemones.service';
import { RegionesService } from 'src/services/regiones.service';


@Component({
  selector: 'app-registrar-pokemon',
  templateUrl: './registrar-pokemon.component.html',
  styleUrls: ['./registrar-pokemon.component.css']
})
export class RegistrarPokemonComponent {
  constructor(pokemonesServices:PokemonesService){}

  obtenerRegiones(){
    


  }

  crearPokemon(nombre_p:string, nombre_r:any, nombre_tipo:any){
    const pokemon:Ipokemon = {
      'nombre_pokemon':nombre_p,

    }
  }

}
