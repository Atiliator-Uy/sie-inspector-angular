import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HojarutaAleatoriaComponent } from './hojaruta-aleatoria/hojaruta-aleatoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HojarutaAleatoriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
