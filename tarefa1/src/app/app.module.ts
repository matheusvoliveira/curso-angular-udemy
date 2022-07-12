import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SucessAlert } from './sucess/sucess.component';
import { WarningAlert } from './warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    SucessAlert,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
