import { Materia } from "./materia";

export interface Topico {
  secaoMateriasId:number;
  secaoMateriasNome:string;
  materia: Materia;
}
