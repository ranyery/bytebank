import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import ITransferencia from '../interfaces/ITransferencia';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<ITransferencia>();

  valor: number;
  destino: number;
  inputValor: HTMLElement;

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    this.inputValor = document.getElementById('valor');
  }

  transferir(): void {
    console.log('Nova transferência solicitada');
    const event: ITransferencia = { valor: this.valor, destino: this.destino };
    this.transferenciaService.adicionar(event).subscribe({
      next: (resultado) => console.log(resultado),
      error: (err) => console.error(err),
      complete: () => {
        this.limparCampo();
        this.inputValor.focus();
      },
    });
  }

  limparCampo(): void {
    this.valor = undefined;
    this.destino = undefined;
  }
}
