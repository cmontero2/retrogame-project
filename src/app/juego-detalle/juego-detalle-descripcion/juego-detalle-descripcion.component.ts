import { Component, OnInit } from '@angular/core';
import { ListaJuegosService } from '../../services/lista-juegos.service';
import { IJuego } from '../../juegos/lista-juegos/juego';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/account/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-juego-detalle-descripcion',
  templateUrl: './juego-detalle-descripcion.component.html',
  styleUrls: ['./juego-detalle-descripcion.component.scss']
})
export class JuegoDetalleDescripcionComponent implements OnInit {

  juego!: IJuego;
  visitasNuevas!: number;
  empresaNombre!: String;
  id!: number;
  idString!: String;

  constructor(
    private listaJuegosService: ListaJuegosService,
    private accountService: AccountService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.id = parameters.id

      this.listaJuegosService.findById(this.id)
      .subscribe(
        data => {
          this.juego = data;
          this.visitIncrement();
          this.accountService.getById(String(data.empresa_id))
          .subscribe(
            data => {
              this.empresaNombre = data.user;
            }
          )
        },
        error => {
          console.log(error);
        }
      )
    })
  }

  visitIncrement() {
    this.juego.visitas! += 1;
    this.listaJuegosService.update(this.id, this.juego)
    .subscribe(
      data => {

      }, error => {
        console.log(error);
      }
    )
  }

}
