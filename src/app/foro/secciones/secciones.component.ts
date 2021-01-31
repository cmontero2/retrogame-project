import { Component, OnInit } from '@angular/core';
import { Seccion } from './seccion';
import { SeccionesService } from './secciones.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss']
})
export class SeccionesComponent implements OnInit {

  secciones?: Seccion[];
  constructor(private seccionesService: SeccionesService) { }

  ngOnInit(): void {
    this.secciones = this.seccionesService.getSecciones();
  }

}
