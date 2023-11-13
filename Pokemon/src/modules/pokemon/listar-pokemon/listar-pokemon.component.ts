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
  displayedColumns: string[] = ["id","name","tipos","regiones","botones","botonPut"]

  constructor(private pokemonesServices: PokemonesService){}

  obtenerPokemones(){
    let pokemones:Ipokemon[] = []
    this.pokemonesServices.getAll()
      .subscribe(response => {

      })
  }

  ngOnInit() {
    this.obtenerPokemones();
    }

  }

