import { Transferencia } from './../models/transferencia.model';
import { TransferService } from './../services/transfer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent {
  dadosTransfers: any[];

  constructor(private service: TransferService){}

  ngOnInit() {
    this.service.full().subscribe((transferencias: Transferencia[]) => {
      this.dadosTransfers = transferencias;
    })
  }
}
