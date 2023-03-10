import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { ExtractComponent } from './extract/extract.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    NewTransferComponent,
    ExtractComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
