import { Component } from '@angular/core';
import ITransferencia from './interfaces/ITransferencia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  transferencias: ITransferencia[] = [];

  transferir($event: ITransferencia) {
    const transferencia = { ...$event, data: new Date() };
    this.transferencias.push(transferencia);
  }
}
