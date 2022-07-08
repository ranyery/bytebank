import { Component } from '@angular/core';
import ITransferencia from './interfaces/ITransferencia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  transferencia: ITransferencia;

  transferir($event: ITransferencia) {
    this.transferencia = $event;
  }
}
