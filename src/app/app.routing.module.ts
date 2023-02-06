import { ExtractComponent } from './extract/extract.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component: ExtractComponent},
  {path: 'nova-transferencia', component: NewTransferComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
