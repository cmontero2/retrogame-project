import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { User } from 'src/app/account/user';
import { AccountService } from '../../services/account.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  public user: any;
  public id: number = 0;
  public imgPath?: String;

  constructor(private activatedRoute: ActivatedRoute) {
    // this.user = accountService.user;
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametros: Params) => {
      this.id = parametros.id;
      console.log("id " + this.id);
    });
    this.imgPath = `../../../assets/img/usuarios/user${this.id}.png`;
  }

}
