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
  constructor(private fb: FormBuilder, private accountService: AccountService, private activatedRoute: ActivatedRoute) {
    const user = accountService.user;
   }
  
  editForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(4)]],
    password: [null, [Validators.required, Validators.minLength(4)]],
    email: [null, [Validators.email, Validators.required]],
    nombre: [null, [Validators.required, Validators.minLength(4)]],
    cif: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    direccion: [null, [Validators.required, Validators.minLength(5)]],
    poblacion: [null, [Validators.required, Validators.minLength(4)]],
    telf: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    nacimiento: [null, [Validators.required]],
  });

  ngOnInit(): void {
    this.user = this.accountService.user;
    console.log("user " + JSON.stringify(this.user, null, 2));
    //recojo los datos de la ruta
    this.activatedRoute.params.subscribe((parametros: Params) => {
      this.id = parametros.user;
      console.log("id " + this.id);
    });
  }

}
