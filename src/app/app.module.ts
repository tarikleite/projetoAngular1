import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NovaTransferenciaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
