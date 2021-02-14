import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { User } from 'src/app/account/user';
import { AccountService } from '../../../services/account.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-perfil-update',
  templateUrl: './perfil-update.component.html',
  styleUrls: ['./perfil-update.component.scss']
})
export class PerfilUpdateComponent implements OnInit {
  public user: any;
  public id: number = 0;
  public imgPath?: String;

  constructor(private fb: FormBuilder, private accountService: AccountService, private activatedRoute: ActivatedRoute) {
     this.user = new User();
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
    /*
    * sacar informacion del token para poder poner en el formulario 
    * requerido en ciertos campos si es empresa
    */
    this.accountService.user.subscribe(
      data => {        
        this.user = data ? data : new User();  
      }
    );
    
    console.log(this.user);
    //recojo los datos de la ruta
    this.activatedRoute.params.subscribe((parametros: Params) => {
      this.id = parametros.id;
      console.log("id " + this.id);
    });
    this.imgPath = `../../../assets/img/usuarios/user${this.id}.png`;
  }

}
