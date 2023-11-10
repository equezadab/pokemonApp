import { Component, OnInit } from '@angular/core';
import { Ipokemon } from 'src/models/ipokemon';
import { PokemonesService } from 'src/services/pokemones.service';

@Component({
  selector: 'app-listar-pokemon',
  templateUrl: './listar-pokemon.component.html',
  styleUrls: ['./listar-pokemon.component.css']
})
export class ListarPokemonComponent implements OnInit {

  pokemones:Ipokemon[]=[];
  displayedColumns: string[] = ["id","name","regiones","tipos"]

  constructor(private pokemonesServices: PokemonesService){}

  obtenerPokemones(){
    this.pokemonesServices.getAll()
    .subscribe(response=>{
      response.forEach(pokemon=>{
        this.pokemones = response
        console.log(pokemon)  
      })
  })
  }

  ngOnInit() {
    this.obtenerPokemones();
    }
    
  }

  



