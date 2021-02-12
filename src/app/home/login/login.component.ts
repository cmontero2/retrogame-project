import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from "../../services/alert.service"
import { AccountService } from '../../services/account.service';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;


    editForm = this.formBuilder.group({
      user: [null, [Validators.required, Validators.minLength(4)]],
      pass: [null, [Validators.required, Validators.minLength(4)]],
    });

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService,
        public activeModal: NgbActiveModal, 
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    save(): void {
      const usuario = this.createFromForm();
      // this.subscribeToSaveResponse(this.usuarioService.create(usuario)); // Cuando este creado la clase usuario y la clase UsuarioService
      console.log("Usuario: " + JSON.stringify(usuario, null, 2));
      this.cerrarModal();
    }

    private createFromForm(): any { // Cambiar tipo de any a Usuario
      return {
        // ...new Usuario(), Crear clase usuario
        user: this.editForm.get(['user'])!.value,
        pass: this.editForm.get(['pass'])!.value,
      };
    }

    cerrarModal() {
      this.activeModal.close();
    }

    doRegister(){
      this.activeModal.close();
      const modalRef = this.modalService.open(RegistroComponent);
    }

    login(){
      this.activeModal.close();
    }

    //para loguear
    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        /*if (this.form.invalid) {
            return;
        }*/

        this.loading = true;

        const usuario = this.createFromForm();
        //this.subscribeToSaveResponse(this.usuarioService.create(usuario)); // Cuando este creado la clase usuario y la clase UsuarioService
        
        this.cerrarModal();
        this.accountService.login(usuario.user, usuario.pass)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from query parameters or default to home page
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigateByUrl(returnUrl);
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    
}
