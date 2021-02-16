import { Component, OnInit } from '@angular/core';
import { IJuego } from '../../juegos/lista-juegos/juego';
import { ListaJuegosService } from '../../services/lista-juegos.service';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-juegos-empresa',
  templateUrl: './juegos-empresa.component.html',
  styleUrls: ['./juegos-empresa.component.scss']
})
export class JuegosEmpresaComponent implements OnInit {

  juegos: IJuego[] = [];
  empresa_id!: number;
  empresa_nombre!: string;

  constructor(
    private listaJuegosService: ListaJuegosService,
    private accountService: AccountService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.empresa_id = parameters.id;

      this.juegos = [];

      this.accountService.getById(String(this.empresa_id))
      .subscribe(
        data => {
          console.log(data.username);
        } 
      )

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
