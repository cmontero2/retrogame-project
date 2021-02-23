import { Component, OnInit } from '@angular/core';
import { IJuego } from 'src/app/juegos/lista-juegos/juego';
import { ListaJuegosService } from 'src/app/services/lista-juegos.service';

@Component({
  selector: 'app-masjugados',
  templateUrl: './masjugados.component.html',
  styleUrls: ['./masjugados.component.scss']
})
export class MasjugadosComponent implements OnInit {

  juegos: IJuego[] = [];

  constructor(
    private listaJuegosService: ListaJuegosService,
  ) { }

  //Devuelve todos los juegos ordenados por visitas
  ngOnInit(): void {
    this.listaJuegosService.findByOrderByVisits()
    .subscribe(
      data => {
        this.juegos = data;

      }, error => {
        console.log(error);
      }
    )
  }

}
