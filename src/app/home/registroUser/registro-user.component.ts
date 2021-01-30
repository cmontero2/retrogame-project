import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.scss']
})
export class RegistroUserComponent implements OnInit {

  editForm = this.fb.group({
    username: [null, [Validators.required, Validators.minLength(4)]],
    password: [null, [Validators.required, Validators.minLength(4)]],
    email: [null, [Validators.email]],
    cif: [null]
  });

  public isCompany:boolean = false;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

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
      // resto de campos
    };
  }

  cerrarModal() {
    this.activeModal.close();
  }
}
