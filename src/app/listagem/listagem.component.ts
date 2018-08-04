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
  alertaCaption: string;
  colunas: any[];
  loading: boolean;
  semRegistro: string;

  constructor(private alertaService: AlertaService) {
    this.alertaCaption = 'Lista de alertas';
    this.semRegistro = 'Nenhum registro encontrado!'
  }
  
  ngOnInit() {
    this.listarAlertas();

    this.colunas = [
      { field: 'pontoDeVenda', header: 'Ponto de Venda' },
      { field: 'produto', header: 'Produto/Categoria' },
      { field: 'descricao', header: 'Descrição' },
      { field: 'margem', header: 'Margem' }
    ];
  }

  listarAlertas() {
    this.alertaService.listarAlertas().subscribe((alertas: Alerta[]) => {
      this.alertas = alertas;
    });
  }

}
