import { Component, OnInit } from '@angular/core';
import { SeccionesJuegosService } from './secciones-juegos.service';

@Component({
  selector: 'app-secciones-juegos',
  templateUrl: './secciones-juegos.component.html',
  styleUrls: ['./secciones-juegos.component.scss']
})
export class SeccionesJuegosComponent implements OnInit {

  secciones:any;
  constructor(private seccionesJuegosService: SeccionesJuegosService) {
    
   }

  ngOnInit(): void {
    this.seccionesJuegosService.findAll()
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
