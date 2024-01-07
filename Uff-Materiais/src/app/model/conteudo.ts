import { Topico } from "./topico";

export interface Conteudo {
  conteudoSecaoId:number;
  conteudoDaSecao:string;
  nome:string;
  descricao:string;
  secaoMaterias:Topico;
}
