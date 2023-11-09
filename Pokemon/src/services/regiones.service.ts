import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegiones } from 'src/models/iregiones';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {

  constructor(private http:HttpClient) { }

  public post(region:IRegiones){
    const endpoint:string = 'https://6o87otg5k8.execute-api.us-east-1.amazonaws.com/dev/post'
    const body = JSON.stringify(region)
    return this.http.post(endpoint,body)
  }

  public getAll():Observable<IRegiones[]> {
    const endpoint:string = 'https://ve61hqrcta.execute-api.us-east-1.amazonaws.com/dev/get'
    return this.http.get<IRegiones[]>(endpoint)
  }

  public delete(id:number){
    const endpoint:string = 'https://e84h8t17c1.execute-api.us-east-1.amazonaws.com/dev/delete'
    return this.http.delete(endpoint+'/'+id)
  }

  public put(region:IRegiones){
    const endpoint:string = 'https://2jx7odrg4f.execute-api.us-east-1.amazonaws.com/dev/put'
    const body = JSON.stringify(region)
    console.log(body)
    return this.http.put(endpoint,body)
  }

}
