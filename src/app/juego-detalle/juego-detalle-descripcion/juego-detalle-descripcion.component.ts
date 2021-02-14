import { Component, OnInit } from '@angular/core';
import { ListaJuegosService } from '../../services/lista-juegos.service';
import { IJuego } from '../../juegos/lista-juegos/juego';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juego-detalle-descripcion',
  templateUrl: './juego-detalle-descripcion.component.html',
  styleUrls: ['./juego-detalle-descripcion.component.scss']
})
export class JuegoDetalleDescripcionComponent implements OnInit {

  juego!: IJuego;
  id!: number;

  constructor(
    private listaJuegosService: ListaJuegosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.id = parameters.id

      this.listaJuegosService.findById(this.id)
      .subscribe(
        data => {
          console.log(data);
          this.juego = data;
          console.log(this.juego);
        }
      )
    })
  }

}
