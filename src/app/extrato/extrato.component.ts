import { Component, OnInit, Input } from '@angular/core';
import ITransferencia from '../interfaces/ITransferencia';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  @Input() transferencias: ITransferencia[];

  constructor() {}

  ngOnInit(): void {}
}
