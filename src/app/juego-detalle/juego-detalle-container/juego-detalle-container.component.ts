import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-juego-detalle-container',
  templateUrl: './juego-detalle-container.component.html',
  styleUrls: ['./juego-detalle-container.component.scss']
})
export class JuegoDetalleContainerComponent implements OnInit {

  id: number=0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametros: Params) => {
      this.id = parametros.id;
      //console.log(this.id);
    })
  }

}
