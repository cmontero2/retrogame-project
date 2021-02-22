import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EntradasService } from './entradas.service';
import { SeccionesService } from '../secciones/secciones.service';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.scss']
})

export class EntradasComponent implements OnInit {

  public id: number = 0;
  public seccion: any;
  public usuario: any;
  public entradas?: any;

  constructor(private activatedRoute?: ActivatedRoute, 
    private seccionesService?: SeccionesService, 
    private entradasService?: EntradasService) {
    
  }

  ngOnInit(): void {
    this.activatedRoute?.params.subscribe((parametros: Params) => {
      this.id = parametros.id;
    });
    this.entradasService?.findAll()
    .subscribe(
      data =>{
        this.entradas = data;
        console.log('entradas', this.entradas)
      },
      error =>{
        console.log(error);
      });

      this.entradasService?.findSeccion(this.id)
      .subscribe(
      data =>{
        this.seccion = data[0];
        console.log('seccion', this.seccion)
      },
      error =>{
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
