import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';
import { ListaJuegosService } from './lista-juegos.service';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.scss']
})
export class ListaJuegosComponent implements OnInit {

  juegos?: Juego[];
  constructor(private listaJuegosService: ListaJuegosService) { }

  ngOnInit(): void {
    this.juegos = this.listaJuegosService.getJuegos();
  }

}
