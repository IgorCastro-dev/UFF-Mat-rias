import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  constructor(){}

  private meuDado: any;

  setMeuDado(dado: any): void {
    this.meuDado = dado;
  }

  getMeuDado(): any {
    return this.meuDado;
  }
}
