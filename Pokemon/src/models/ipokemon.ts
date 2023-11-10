import { IRegiones } from "./iregiones"
import { Itipos } from "./itipos"

export interface Ipokemon {
    id?:number,
    nombre_pokemon:string,
    regiones:IRegiones[],
    tipos:Itipos[]
}
