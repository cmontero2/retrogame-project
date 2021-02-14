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
    rol_id: [null, [Validators.required]],
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
    const usuario = this.createFromForm();
    // this.subscribeToSaveResponse(this.usuarioService.create(usuario)); // Cuando este creado la clase usuario y la clase UsuarioService
    console.log("Usuario: " + JSON.stringify(usuario, null, 2));
    this.cerrarModal();
  }

  private createFromForm(): any { // Cambiar tipo de any a Usuario
    return {
      // ...new Usuario(), Crear clase usuario
      username: this.editForm.get(['username'])!.value,
      password: this.editForm.get(['password'])!.value,
      email: this.editForm.get(['email'])!.value,
      nombre: this.editForm.get(['nombre'])!.value,
      cif: this.editForm.get(['cif'])!.value,
      direccion: this.editForm.get(['direccion'])!.value,
      poblacion: this.editForm.get(['poblacion'])!.value,
      telf: this.editForm.get(['telf'])!.value,
      nacimiento: this.editForm.get(['nacimiento'])!.value,
      rol_id: this.editForm.get(['rol_id'])!.value,
    };
  }

  register(){
    const usuario = this.createFromForm();
    console.log("asd");
    this.accountService.register(usuario);
    this.cerrarModal();
  }

  cerrarModal() {
    this.activeModal.close();
  }
}
