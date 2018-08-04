// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

// Aplicação
import { AlertaService } from './services/alerta.service';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListagemComponent
  ],
  imports: [
    // Angular
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,

    // PrimeNG
    ButtonModule,
    TableModule
  ],
  providers: [
    AlertaService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
