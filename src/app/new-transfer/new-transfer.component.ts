import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {
  value: number;
  for: string;

 transfer(){
  console.log('Tranferencia Firebank')
  console.log(`Valor: ${this.value}`)
  console.log(`Para: ${this.for}`)
 }
}
