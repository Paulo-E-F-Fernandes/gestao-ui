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
  loading: boolean;

  constructor(private alertaService: AlertaService) { }
  
  ngOnInit() {
    this.listarAlertas();

    this.colunas = [
      { field: 'produto', header: 'Produto', width: '30%' },
      { field: 'categoria', header: 'Categoria', width: '12%' },
      { field: 'flagTipo', header: 'Tipo', width: '6%' },
      { field: 'descricao', header: 'Descrição', width: '24%' },
      { field: 'pontoDeVenda', header: 'Ponto de Venda', width: '20%' },
      { field: 'margem', header: 'Margem', width: '8%' }
    ];
  }

  listarAlertas() {
    this.alertaService.listarAlertas().subscribe((alertas: Alerta[]) => {
      this.alertas = alertas;
    });
  }

}
