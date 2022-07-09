import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import ITransferencia from '../interfaces/ITransferencia';
import { API_PATH } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransferenciaService {
  private listaTransferencia: ITransferencia[];
  private BASE_URL: string = `${API_PATH}/transferencias`;

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  todas(): Observable<ITransferencia[]> {
    return this.httpClient.get<ITransferencia[]>(this.BASE_URL);
  }

  adicionar(transferencia: ITransferencia): Observable<ITransferencia> {
    this.adicionarData(transferencia);
    return this.httpClient.post<ITransferencia>(this.BASE_URL, transferencia);
  }

  private adicionarData(transferencia: ITransferencia) {
    transferencia.data = new Date();
  }
}
