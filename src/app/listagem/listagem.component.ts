import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../services/alerta.service';
import { Alerta } from '../domain/alerta';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  alertas: Alerta[];
  colunas: any[];

  constructor(private alertaService: AlertaService) { }
  
  ngOnInit() {
    this.listarAlertas();

    this.colunas = [
      { field: 'produto', header: 'Produto' },
      { field: 'categoria', header: 'Categoria' },
      { field: 'flagTipo', header: 'Tipo' },
      { field: 'descricao', header: 'Descrição' },
      { field: 'pontoDeVenda', header: 'Ponto de Venda' },
      { field: 'margem', header: 'Margem' }
    ];
  }

  listarAlertas() {
    this.alertaService.listarAlertas().subscribe((alertas: Alerta[]) => {
      this.alertas = alertas;
    });
  }

}
