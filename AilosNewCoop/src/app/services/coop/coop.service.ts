import { Injectable } from '@angular/core';
import { CoopData, SituaçãoConta } from 'app/models/coop-data/coop-data';

@Injectable({
  providedIn: 'root'
})
export class CoopService {

  constructor() { }

  private coopData: CoopData[] = [
    {
      cpf: '11111111111',
      nome: 'Bruno Roger Stupp',
      situacao: SituaçãoConta.regular,
      numeroContaCorrente: '1234-5',
      coopContaCorrente: 'Viacredi',
      numeroContaAplicacao: '1234-5',
      coopContaAplicacao: 'Viacredi'
    }
  ];

  getCoopData(cpf: string) {
    return new Promise<CoopData>((resolve, reject) => {
      const response = this.coopData.find((coop) => coop.cpf === cpf);
      if (response) {
        resolve(response);
      } else {
        reject({message: 'CPF nao encontrado'});
      }
    })
  }
}
