import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '../../services/account.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  userForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(4)]],
    password: [null, [Validators.required, Validators.minLength(4)]],
    email: [null, [Validators.email, Validators.required]],
    rol_id: ["3", []],
  });

  companyForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(4)]],
    password: [null, [Validators.required, Validators.minLength(4)]],
    email: [null, [Validators.email, Validators.required]],
    nombre: [null, [Validators.required, Validators.minLength(4)]],
    cif: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    direccion: [null, [Validators.required, Validators.minLength(5)]],
    poblacion: [null, [Validators.required, Validators.minLength(4)]],
    telf: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    nacimiento: [null, [Validators.required]],
    rol_id: ["1", []],
  });

  public isCompany:boolean = false;

  constructor(
    public activeModal: NgbActiveModal, 
    private fb: FormBuilder,
    private accountService: AccountService,
    ) { }

  ngOnInit(): void {
  }

  setCompany(isCompany: boolean) {
    this.isCompany = isCompany
  }

  save(): void {
    //const usuario = this.createFromForm();
    // this.subscribeToSaveResponse(this.usuarioService.create(usuario)); // Cuando este creado la clase usuario y la clase UsuarioService
    //console.log("Usuario: " + JSON.stringify(usuario, null, 2));
    this.cerrarModal();
  }

  private createFromFormUser(): any { 
    return {
      // ...new Usuario(), Crear clase usuario
      username: this.userForm.get(['username'])!.value,
      password: this.userForm.get(['password'])!.value,
      email: this.userForm.get(['email'])!.value,
      rol_id: this.userForm.get(['rol_id'])!.value,
    };
  }

  private createFromFormCompany(): any { 
    return {
      // ...new Usuario(), Crear clase usuario
      username: this.companyForm.get(['username'])!.value,
      password: this.companyForm.get(['password'])!.value,
      email: this.companyForm.get(['email'])!.value,
      nombre: this.companyForm.get(['nombre'])!.value,
      cif: this.companyForm.get(['cif'])!.value,
      direccion: this.companyForm.get(['direccion'])!.value,
      poblacion: this.companyForm.get(['poblacion'])!.value,
      telf: this.companyForm.get(['telf'])!.value,
      nacimiento: this.companyForm.get(['nacimiento'])!.value,
      rol_id: this.companyForm.get(['rol_id'])!.value,
    };
  }

  register(){
    if (!this.userForm.invalid) {
      const usuario = this.createFromFormUser();
      this.accountService.register(usuario);
      this.cerrarModal();
    } else if(!this.companyForm.invalid){
      const usuario = this.createFromFormCompany();
      this.accountService.register(usuario);
      this.cerrarModal();
    }
    
  }

  cerrarModal() {
    this.activeModal.close();
  }
}
