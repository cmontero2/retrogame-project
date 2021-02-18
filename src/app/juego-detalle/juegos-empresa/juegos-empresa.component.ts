import { Component, OnInit } from '@angular/core';
import { IJuego } from '../../juegos/lista-juegos/juego';
import { ListaJuegosService } from '../../services/lista-juegos.service';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { User } from '../../account/user';

@Component({
  selector: 'app-juegos-empresa',
  templateUrl: './juegos-empresa.component.html',
  styleUrls: ['./juegos-empresa.component.scss']
})
export class JuegosEmpresaComponent implements OnInit {

  juegos: IJuego[] = [];
  user!: String;
  empresa_id!: number;
  empresa_nombre!: string;

  constructor(
    private listaJuegosService: ListaJuegosService,
    private accountService: AccountService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {

      this.juegos = [];

      this.listaJuegosService.findById(parameters.id)
      .subscribe(
        data => {
          this.empresa_id = data.empresa_id;
          this.listaJuegosService.findByCompanyId(this.empresa_id)
          .subscribe(
            data => {
              this.juegos = data;
              this.accountService.getById(String(this.empresa_id))
              .subscribe(
                data => {
                  this.user = data.user;
                } 
              )
            }
          )
        }, error => {
          console.log(error);
        }
      )
    })
  }

}
