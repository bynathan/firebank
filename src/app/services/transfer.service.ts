import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private transferList: any[];

  constructor() {
    this.transferList = []
   }

  get transfer(){
    return this.transferList
  }

  newTransfer(dadosTransfers: any){
    this.hidrate(dadosTransfers)
    this.transferList.push(dadosTransfers);
  }

  private hidrate(dadosTransfers: any){
    dadosTransfers.data = new Date();
  }
}
