import { Component, OnInit } from '@angular/core';

import ITransferencia from '../interfaces/ITransferencia';
import { TransferenciaService } from './../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: ITransferencia[] = [];

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    this.transferenciaService
      .todas()
      .subscribe((transferencias: ITransferencia[]) => {
        console.table(transferencias);
        this.transferencias = transferencias;
      });
    this.transferencias = this.transferenciaService.transferencias;
  }
}
