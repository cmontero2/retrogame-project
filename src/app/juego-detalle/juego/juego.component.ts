import { Component, OnInit, SecurityContext } from '@angular/core';
import { IJuego } from 'src/app/juegos/lista-juegos/juego';
import { ListaJuegosService } from 'src/app/services/lista-juegos.service';
import { ActivatedRoute } from '@angular/router';
import { IUsuarioJuego } from 'src/app/models/UsuarioJuego';
import { UploadUserGameService } from '../../services/upload-user-game.service';
import { User } from 'src/app/account/user';
import { AccountService } from '../../services/account.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import Moment from 'moment';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  juego: IJuego = {};
  usuarioJuego: IUsuarioJuego = {};
  id!: number;
  user_id!: number;
  safeResourceUrl: SafeResourceUrl = "";
  safeIframeUrl: string = "";

  constructor(
    private listaJuegosService: ListaJuegosService,
    private uploadUserGameService: UploadUserGameService,
    private accountService: AccountService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(parameters => {
      this.id = parameters.id;

      if(this.accountService.userValue.id) {
        this.usuarioJuego.juego_id = parameters.id;
        this.usuarioJuego.usuario_id = Number(this.accountService.userValue.id);
        this.usuarioJuego.fecha_id = Moment().format("YYYY-MM-DD");
        this.uploadUserGameService.uploadUsuarioJuego(this.usuarioJuego)
        .subscribe(
          data => {

          }, error => {
            console.log(error);
          }
        )
      }

      this.listaJuegosService.findById(this.id)
      .subscribe(
        data => {
          this.juego = data;
          this.safeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.juego.iframe_url!);
          this.visitIncrement();
        }, error => {
          console.log(error)
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
