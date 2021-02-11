import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

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
  }

}
