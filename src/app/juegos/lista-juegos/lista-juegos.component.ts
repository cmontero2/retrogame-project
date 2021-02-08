import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';
//import { IJuego } from './juego';
import { ListaJuegosService } from '../../services/lista-juegos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.scss']
})


//
//ANGULAR A JSON
//

export class ListaJuegosComponent implements OnInit {

  juegos?: Juego[];
  categoria?: string;
  constructor(
    private listaJuegosService: ListaJuegosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.juegos = this.listaJuegosService.getJuegosPorCategoriaId(parameters.id);
    })

  }

}




//
//ANGULAR A API YII
//
/*
export class ListaJuegosComponent implements OnInit {

  juegos: IJuego[] = [];

  constructor(
    private listaJuegosService: ListaJuegosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listaJuegosService.findAll()
    .subscribe(
      data => {
        this.juegos = data
        console.log('juego', this.juegos)
      },
      error => {
        console.log(error)
      }
      );
    console.log(this.juegos);
  }
}
*/
