import { Component, OnInit } from '@angular/core';
import { SeccionesService } from './secciones.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss']
})
export class SeccionesComponent implements OnInit {

  secciones:any;
  constructor(private seccionesService: SeccionesService) {
    
   }

  ngOnInit(): void {
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
