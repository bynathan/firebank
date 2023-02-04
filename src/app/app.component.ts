import { TransferService } from './services/transfer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebank';

  constructor(private service: TransferService){}

  transfer($event){
    console.log($event)
    this.service.newTransfer($event)
  }
}
