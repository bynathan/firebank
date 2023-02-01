import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebank';

  dadosTransfers: any[] = [];

  transfer($event){
    const dadosTransfer = {...$event, data: new Date()}
    console.log(dadosTransfer)
    this.dadosTransfers.push(dadosTransfer);
  }
}
