import { formatNumber } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {
  @Output() inTransfer = new EventEmitter<any>()

  value: number;
  for: string;

  transfer(){
    console.log('Tranferencia Firebank');
    const dadosInput = {value: this.value, for: this.for};
    this.inTransfer.emit(dadosInput);
    this.clearDados()
  }

  clearDados(){
    this.value = 0;
    this.for = '';
  }
}
