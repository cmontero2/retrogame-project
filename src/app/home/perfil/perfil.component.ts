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

  constructor(
    private activatedRoute: ActivatedRoute,
    private perfilService: PerfilService,
    private juegosService: ListaJuegosService
    ) {
    
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametros: Params) => {
      this.id = parametros.id;
      console.log("id " + this.id);
    });
    //this.imgPath = this.foto;

    this.perfilService.findById(this.id)
      .subscribe(
        data => {
          this.user = data;
          console.log('usuario ', this.user)
        },
        error => {
          console.log(error);
        });

    this.perfilService.findUserJuegoById(this.id)
    .subscribe(
      data => {
        this.juegos = data;
        this.cambiarIdPorJuego()
      },
      error => {
        console.log(error);
      });

    //saca nombre de foto
    this.perfilService.findPhotoByName(this.user.foto)
    .subscribe(
      data => {
        this.foto = data;
      },
      error => {
        console.log(error);
      });
      
  }

  cambiarIdPorJuego(){
    this.juegos.forEach(
      (element: any)=>
      //console.log(element.juego_id),
      //console.log(this.juegosService.findById(element.juego_id)),
      
      this.juegosService.findById(element.juego_id).subscribe(
        data => {
          this.juegosNombre.push(data);
          console.log(data);
        }),
      
    );
  }


}
