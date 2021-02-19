import { Component, OnInit } from '@angular/core';
import { IJuego } from './juego';
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
  ids: number[] = [];

  constructor(
    private listaJuegosService: ListaJuegosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.id = parameters.id

      this.juegos = [];
      this.ids = [];
      this.listaJuegosService.findGamesIdByCategoryId(this.id)
      .subscribe(
        data => {
          for (let item of data) {
            this.ids.push(item.juego_id);
          }

          for (let id of this.ids) {
            this.listaJuegosService.findById(id)
              .subscribe(
                data => {
                  this.juegos.push(data)
                  this.juegos.sort((juego1, juego2) => {
                    if(juego1.nombre === null) {
                      return -1
                    } else if(juego2.nombre === null) {
                      return 1
                    } else {
                      return juego1.nombre!.localeCompare(juego2.nombre || "")
                    }
                  })
                },
                error => {
                  console.log(error);
                }
              )
          }
        
        },
        error => {
          console.log(error)
        }
      );
    });
    
  }

  onClick() {
    
  }
}

