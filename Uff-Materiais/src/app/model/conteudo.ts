import { Topico } from "./topico";

export interface Conteudo {
  conteudoSecaoId:number;
  conteudoDaSecao:string;
  descricao:string;
  secaoMaterias:Topico;
}
