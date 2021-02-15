import { Component, OnInit } from '@angular/core';
import { IJuego } from '../../juegos/lista-juegos/juego';
import { ListaJuegosService } from '../../services/lista-juegos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juegos-empresa',
  templateUrl: './juegos-empresa.component.html',
  styleUrls: ['./juegos-empresa.component.scss']
})
export class JuegosEmpresaComponent implements OnInit {

  juegos: IJuego[] = [];
  empresa_id!: number;

  constructor(
    private listaJuegosService: ListaJuegosService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.empresa_id = parameters.id;

      this.juegos = [];

      this.listaJuegosService.findByCompanyId(this.empresa_id)
      .subscribe(
        data => {
          this.juegos = data;
          console.log(this.juegos);
        }
      )
    })
  }

}
