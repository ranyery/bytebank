import { Component } from '@angular/core';

import ITransferencia from './interfaces/ITransferencia';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private transferenciaService: TransferenciaService) {}

  transferir($event: ITransferencia) {
    this.transferenciaService.adicionar($event);
  }
}
