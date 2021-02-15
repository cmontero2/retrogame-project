import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { User } from 'src/app/account/user';
import { AccountService } from '../../../services/account.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PerfilService } from '../perfil.service';


@Component({
  selector: 'app-perfil-update',
  templateUrl: './perfil-update.component.html',
  styleUrls: ['./perfil-update.component.scss']
})
export class PerfilUpdateComponent implements OnInit {
  public user: any;
  public id: number = 0;
  public imgPath?: String;
  public userData?: any;

  constructor(
    private fb: FormBuilder, 
    private accountService: AccountService, 
    private activatedRoute: ActivatedRoute,
    private perfilService: PerfilService,
    private router: Router
    ) {
      this.user = new User();
   }

   editForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(4)]],
    password: [null, [Validators.required, Validators.minLength(4)]],
    email: [null, [Validators.email, Validators.required]],
    nombre: [null, []],
    cif: [null, []],
    direccion: [null, []],
    poblacion: [null, []],
    telf: [null, []],
    nacimiento: [null, []],
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

    //recojo los datos(id) de la ruta
    this.activatedRoute.params.subscribe((parametros: Params) => {
      this.id = parametros.id;
    });

    this.perfilService.findById(this.id)
      .subscribe(
        data => {
          this.userData = data;
          this.editForm.get('username')?.setValue(this.userData.user);
          this.editForm.get('password')?.setValue(this.userData.password);
          this.editForm.get('email')?.setValue(this.userData.email);
          this.editForm.get('nombre')?.setValue(this.userData.nombre);
          this.editForm.get('cif')?.setValue(this.userData.cif);
          this.editForm.get('direccion')?.setValue(this.userData.direccion);
          this.editForm.get('poblacion')?.setValue(this.userData.poblacion);
          this.editForm.get('telf')?.setValue(this.userData.telf);
          this.editForm.get('nacimiento')?.setValue(this.userData.nacimiento);
        },
        error => {
          console.log(error);
    });
  
    
    this.imgPath = `../../../assets/img/usuarios/user${this.id}.png`;
  }

  private createFromForm(): any { // Cambiar tipo de any a Usuario
    return {
      // ...new Usuario(), Crear clase usuario
      user: this.editForm.get(['username'])!.value,
      password: this.editForm.get(['password'])!.value,
      email: this.editForm.get(['email'])!.value,
      nombre: this.editForm.get(['nombre'])!.value,
      CIF: this.editForm.get(['cif'])!.value,
      direccion: this.editForm.get(['direccion'])!.value,
      poblacion: this.editForm.get(['poblacion'])!.value,
      telefono: this.editForm.get(['telf'])!.value,
      nacimiento: this.editForm.get(['nacimiento'])!.value,
    };
  }

  update (){
    if (!this.editForm.invalid) {
      const usuario = this.createFromForm();
      console.log("asd "+JSON.stringify(usuario));
      this.accountService.update(this.id, usuario).subscribe(
        data=>{
          this.router.navigate([`perfil/${this.id}`])
        },
        error=> console.log(error)
      );
    }
    
  }

}
