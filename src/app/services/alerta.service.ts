// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Aplicação
import { Alerta } from '../domain/alerta';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  private alertaURL: string = 'http://localhost:8080/alertas/';

  constructor(private http: HttpClient) { }

  listarAlertas() {
    return this.http.get<Alerta[]>(this.alertaURL);
  }

}
