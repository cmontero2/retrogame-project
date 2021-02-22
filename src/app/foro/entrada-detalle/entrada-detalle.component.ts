import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EntradaDetalleService } from './entrada-detalle.service';
import { EntradasService } from '../entradas/entradas.service';

@Component({
  selector: 'app-entrada-detalle',
  templateUrl: './entrada-detalle.component.html',
  styleUrls: ['./entrada-detalle.component.scss']
})
export class EntradaDetalleComponent implements OnInit {

  public id: number = 0;
  public entrada: any;
  public usuario: any;
  public comentarios: any;

  constructor(private activatedRoute?: ActivatedRoute, 
    private entradaDetalleService?: EntradaDetalleService, 
    private entradasService?: EntradasService) {
    
  }

  ngOnInit(): void {
    this.activatedRoute?.params.subscribe((parametros: Params) => {
      this.id = parametros.id;
    });
    this.entradaDetalleService?.findAll()
    .subscribe(
      data =>{
        this.comentarios = data;
        console.log('comentarios', this.comentarios)
      },
      error =>{
        console.log(error);
      });
    
        this.entradaDetalleService?.findEntrada(this.id)
          .subscribe(
            data => {
              this.entrada = data[0];
              console.log('entrada', this.entrada)
            },
            error => {
              console.log(error);
            });

            this.entradasService?.findUsuario(this.id)
      .subscribe(
      data =>{
        this.usuario = data;
        console.log('usuario', this.usuario)
      },
      error =>{
        console.log(error);
      });
  }

}