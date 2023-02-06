import { RouterModule } from '@angular/router';
import { Transferencia } from './../models/transferencia.model';
import { TransferService } from './../services/transfer.service';
import { HttpClient } from '@angular/common/http';
import { formatNumber } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {
  @Output() inTransfer = new EventEmitter<any>()

  value: number;
  for: string;

  constructor(private service: TransferService, private router: Router){}

  transfer(){
    console.log('Tranferencia Firebank');
    const dadosInput: Transferencia = {value: this.value, for: this.for};
    this.service.newTransfer(dadosInput).subscribe(resultado => {
      console.log(resultado)
      this.clearDados()
      this.router.navigateByUrl('extrato');
    },(error) => {
      console.log(error)
    })
    this.clearDados()
  }

  clearDados(){
    this.value = Number('NaN');
    this.for = '';
  }
}
