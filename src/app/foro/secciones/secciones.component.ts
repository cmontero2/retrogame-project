import { Component, OnInit } from '@angular/core';
import { Seccion } from './seccion';
import { SeccionesService } from './secciones.service';
import { ISeccion } from './seccion';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss']
})
export class SeccionesComponent implements OnInit {

  secciones:ISeccion[] = [];
  constructor(private seccionesService: SeccionesService) { }

  ngOnInit(): void {
    //this.secciones = this.seccionesService.getSecciones();
    this.seccionesService.findAll()
    .subscribe(
      data =>{
        this.secciones = data;
        console.log('secciones', this.secciones)
      },
      error =>{
        console.log(error);
      })
  }

}
