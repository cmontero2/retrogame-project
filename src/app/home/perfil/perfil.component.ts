import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { User } from 'src/app/account/user';
import { AccountService } from '../../services/account.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  public user: any;
  public id: number = 0;
  public imgPath?: String;

  constructor(
    private activatedRoute: ActivatedRoute,
    private perfilService: PerfilService
    ) {
    
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametros: Params) => {
      this.id = parametros.id;
      console.log("id " + this.id);
    });
    this.imgPath = `../../../assets/img/usuarios/user${this.id}.png`;

    this.perfilService.findById(this.id)
      .subscribe(
        data => {
          this.user = data;
          console.log('usuario ', this.user)
        },
        error => {
          console.log(error);
        });
  }

}
