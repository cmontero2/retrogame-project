import { Component, OnInit } from '@angular/core';
import { IJuego } from './juego';
import { ICategoria } from 'src/app/home/categorias/categoria';
import { CategoriasService } from '../../home/categorias/categorias.service';
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
/*
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
*/



//
//ANGULAR A API YII
//

export class ListaJuegosComponent implements OnInit {

  juegos: IJuego[] = [];
  id!: number;
  categoria?: ICategoria;

  constructor(
    private listaJuegosService: ListaJuegosService,
    private categoriasService: CategoriasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.id = parameters.id;
    })
  }
}

