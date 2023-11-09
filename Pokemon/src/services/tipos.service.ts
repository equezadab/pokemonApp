import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itipos } from 'src/models/itipos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  constructor(private http:HttpClient) { }

  public post(tipos:Itipos){
    const endpoint:string = 'https://2h84b5d2kg.execute-api.us-east-1.amazonaws.com/dev/post'
    const body = JSON.stringify(tipos)
    return this.http.post(endpoint,body)
  }
  public getAll():Observable<Itipos[]>{
    const endpoint:string = 'https://nymoqkdalk.execute-api.us-east-1.amazonaws.com/dev/get'
    return this.http.get<Itipos[]>(endpoint)
  }

  public delete(id:number){
    const endpoint:string = 'https://nbugtvmuzf.execute-api.us-east-1.amazonaws.com/dev/delete'
    return this.http.delete(endpoint+'/'+id)
  }
  
  public put(tipos:Itipos){
    const endpoint:string = 'https://lv48uvjbqc.execute-api.us-east-1.amazonaws.com/dev/put'
    const body = JSON.stringify(tipos)
    return this.http.put(endpoint,body)
  }
}
