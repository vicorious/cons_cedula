import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConscedulaComponent } from './conscedula/conscedula.component';
import { ConsdatosComponent } from './consdatos/consdatos.component';
import {FormsModule} from "@angular/forms";
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarSaldosComponent } from './conscedula/listar-saldos/listar-saldos.component';

@NgModule({
  declarations: [
    AppComponent,
    ConscedulaComponent,
    ConsdatosComponent,
    ListarSaldosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
