import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number = 0;
  destino: number;

  transferir(): void {
    console.log('Nova transferência solicitada');
    console.log('Valor:', this.valor);
    console.log('Destino:', this.destino);
  }
}
