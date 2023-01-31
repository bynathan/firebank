import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebank';

  dadosTransfer: any;

  transfer($event){
    console.log($event);
    this.dadosTransfer = $event
  }
}
