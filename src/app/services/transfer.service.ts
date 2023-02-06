import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private transferList: any[];
  private url = 'http://localhost:3000/transferencia';

  full(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  constructor(private httpClient: HttpClient) {
    this.transferList = []
   }

  get transfer(){
    return this.transferList
  }

  newTransfer(dadosTransfers: Transferencia): Observable<Transferencia>{
    this.hidrate(dadosTransfers);
    return this.httpClient.post<Transferencia>(this.url, dadosTransfers);
  }

  private hidrate(dadosTransfers: any){
    dadosTransfers.data = new Date();
  }
}
