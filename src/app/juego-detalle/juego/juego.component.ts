import { Component, OnInit } from '@angular/core';
import { IJuego } from 'src/app/juegos/lista-juegos/juego';
import { ListaJuegosService } from 'src/app/services/lista-juegos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  juego!: IJuego;
  id!: number;

  constructor(
    private listaJuegosService: ListaJuegosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.id = parameters.id;

      this.listaJuegosService.findById(this.id)
      .subscribe(
        data => {
          this.juego = data;
          this.visitIncrement();
          this.listaJuegosService.update(this.id, this.juego);
        }, error => {
          console.log(error)
        }
      )
    })
  }

  visitIncrement() {
    this.juego.visitas! += 1;
  }



}
