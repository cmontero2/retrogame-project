import { Component, OnInit } from '@angular/core';
import { IJuego } from './juego';
import { ListaJuegosService } from '../../services/lista-juegos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.scss']
})

export class ListaJuegosComponent implements OnInit {

  juegos: IJuego[] = [];
  id!: number;
  ids: number[] = [];

  constructor(
    private listaJuegosService: ListaJuegosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Recoge el id de la categoría
    this.route.params.subscribe(parameters => {
      this.id = parameters.id

      this.juegos = [];
      this.ids = [];
      //Guarda los ids de los juegos de la categoría seleccionada
      this.listaJuegosService.findGamesIdByCategoryId(this.id)
      .subscribe(
        data => {
          for (let item of data) {
            this.ids.push(item.juego_id);
          }

          //Guarda los juegos de los ids proporcionados
          for (let id of this.ids) {
            this.listaJuegosService.findById(id)
              .subscribe(
                data => {
                  this.juegos.push(data)
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

