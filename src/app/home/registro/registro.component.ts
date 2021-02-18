import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from '../../services/account.service';
import {Md5} from 'ts-md5/dist/md5';

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
    nivel_foro_id:["1",[]],
    estado: ["P",[]],
    token: [this.generaNss(), []],
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
    nivel_foro_id:["1",[]],
    estado: ["P",[]],
    token: [this.generaNss(), []]
  });

  public isCompany:boolean = false;
  public md5 = new Md5();
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

  private createFromFormUser(): any { 
    return {
      user: this.userForm.get(['username'])!.value,
      password: this.md5.appendStr(this.userForm.get(['password'])!.value).end(),
      email: this.userForm.get(['email'])!.value,
      rol_id: this.userForm.get(['rol_id'])!.value,
      nivel_foro_id: this.userForm.get(['nivel_foro_id'])!.value,
      estado: this.userForm.get(['estado'])!.value,
      token: this.userForm.get(['token'])!.value
    };
  }

  private createFromFormCompany(): any { 
    return {
      user: this.companyForm.get(['username'])!.value,
      password: this.md5.appendStr(this.companyForm.get(['password'])!.value).end(),
      email: this.companyForm.get(['email'])!.value,
      nombre: this.companyForm.get(['nombre'])!.value,
      cif: this.companyForm.get(['cif'])!.value,
      direccion: this.companyForm.get(['direccion'])!.value,
      poblacion: this.companyForm.get(['poblacion'])!.value,
      telefono: this.companyForm.get(['telf'])!.value,
      nacimiento: this.companyForm.get(['nacimiento'])!.value,
      rol_id: this.companyForm.get(['rol_id'])!.value,
      nivel_foro_id: this.userForm.get(['nivel_foro_id'])!.value,
      estado: this.userForm.get(['estado'])!.value,
      token: this.userForm.get(['token'])!.value
    };
  }

  register(){
    if (!this.userForm.invalid) {
      const usuario = this.createFromFormUser();
      this.accountService.register(usuario).subscribe(
        data=>console.log("data " + data),
        error=> console.log(error)
      );
      this.cerrarModal();
    } else if(!this.companyForm.invalid){
      const usuario = this.createFromFormCompany();
      this.accountService.register(usuario).subscribe(
        data=>console.log("data " + data),
        error=> console.log(error)
      );
      this.cerrarModal();
    }
    
  }

  cerrarModal() {
    this.activeModal.close();
  }
  
  //genera el token
  generaNss() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = 10;
    for (let i = 0; i < charactersLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }


}
