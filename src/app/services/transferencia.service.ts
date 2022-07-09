import { Injectable } from '@angular/core';
import ITransferencia from '../interfaces/ITransferencia';

@Injectable({ providedIn: 'root' })
export class TransferenciaService {
  private listaTransferencia: ITransferencia[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: ITransferencia) {
    this.adicionarData(transferencia);
    this.transferencias.push(transferencia);
  }

  private adicionarData(transferencia: ITransferencia) {
    transferencia.data = new Date();
  }
}
