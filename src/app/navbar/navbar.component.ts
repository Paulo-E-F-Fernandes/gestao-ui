// Angular
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pageName: string;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.pageName = 'Gestão de Alertas';
  }

}
