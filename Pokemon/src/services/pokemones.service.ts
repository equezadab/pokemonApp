import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipokemon } from 'src/models/ipokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {

  constructor(private http:HttpClient) { }

  public getAll():Observable<Ipokemon[]>{
    const endpoint = 'https://qrh685uwo2.execute-api.us-east-1.amazonaws.com/dev/get'
    return this.http.get<Ipokemon[]>(endpoint)
  }
}
