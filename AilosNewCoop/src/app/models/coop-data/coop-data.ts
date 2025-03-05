export class CoopData {
  nome:string = '';
  cpf:string = '';
  situacao:SituaçãoConta = SituaçãoConta.regular;
  numeroContaCorrente:string = '';
  coopContaCorrente:string = '';
  numeroContaAplicacao:string = '';
  coopContaAplicacao:string = '';
}

export enum SituaçãoConta {
  regular = 'Regular',
  inativo = 'Inativo'
}
