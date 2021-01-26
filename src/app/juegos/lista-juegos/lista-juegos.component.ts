import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';
import { ListaJuegosService } from './lista-juegos.service';
import { ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.scss']
})
export class ListaJuegosComponent implements OnInit {

  juegos?: Juego[];
  categoria?: string;
  constructor(private listaJuegosService: ListaJuegosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.juegos = this.listaJuegosService.getJuegosCategoria(parameters.id);
    })

  }

}
