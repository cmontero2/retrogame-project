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
  public entradas?: any;
  public comentarios?: any;

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
      })
  }

}