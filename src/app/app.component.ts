// Angular
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public constructor (private titleService: Title) {
    let nomePagina = 'Gestão de Alertas';
    this.titleService.setTitle(nomePagina);
  }

}