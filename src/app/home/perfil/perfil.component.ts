import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { User } from 'src/app/account/user';
import { AccountService } from '../../services/account.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PerfilService } from './perfil.service';
import { ListaJuegosService } from '../../services/lista-juegos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  public user: any;
  public id: number = 0;
  public imgPath?: String;
  public juegos: any;
  public juegosNombre: any = [];
  public foto?: any;
  public rutaFoto = "http://localhost/Yii/retrogame-projectAPI/web/img/";
  public usertoken: any;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private perfilService: PerfilService,
    private juegosService: ListaJuegosService,
    private AccountService: AccountService
    ) {
    
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametros: Params) => {
      this.id = parametros.id;
      console.log("id " + this.id);
    });


      this.AccountService.user.subscribe(
        data => {
          
          this.usertoken = data ? data : new User();
          console.log(this.usertoken.id);
          
          this.perfilService.findById(this.usertoken.id)
          .subscribe(
            data => {
              this.user = data;
              this.foto = this.user.foto;
              this.imgPath = this.foto ? `${this.rutaFoto}${this.foto}` : '../../../assets/img/usuarios/no-usuario.png';
            },
            error => {
              console.log(error);
            });

            this.perfilService.findUserJuegoById(this.usertoken.id)
            .subscribe(
              data => {
                this.juegos = data;
                this.cambiarIdPorJuego()
              },
              error => {
                console.log(error);
              });
        }
    
      );
  }

  cambiarIdPorJuego(){
    this.juegos.forEach(
      (element: any)=>
      //console.log(element.juego_id),
      //console.log(this.juegosService.findById(element.juego_id)),
      
      this.juegosService.findById(element.juego_id).subscribe(
        data => {
          this.juegosNombre.push(data);
        }),
      
    );
  }

  


}
