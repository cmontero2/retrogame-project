import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../services/auth-guard';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistroComponent } from '../registro/registro.component';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  titulo: string = 'Por favor Sign In!';
  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router, public activeModal: NgbActiveModal, private modalService: NgbModal) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      console.log(`Hola ${this.authService.usuario.user} ya estás autenticado!`);
      this.router.navigate(['/clientes']);
    }
  }

  login(): void {
    console.log(this.usuario);
    if (this.usuario.user == null || this.usuario.password == null) {
      console.log('Error Login. Username o password vacías!');
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      this.activeModal.close();
      console.log(`Hola ${usuario.user}, has iniciado sesión con éxito!`);
    }, err => {
      if (err.status == 400) {
        console.log('Usuario o clave incorrectas!');
      }
    }
    );
  }

  //modal registro
  doRegister(){
    this.activeModal.close();
    const modalRef = this.modalService.open(RegistroComponent);
  }

  /*
  private userName?: String;
  private userPassword?: String;

  constructor(private auth:AuthGuard, public activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit(): void {
   
  }

  login(){
    this.auth.login();
    this.activeModal.close();
  }

  logout(){
    this.auth.login();
  }

  //modal registro
  doRegister(){
    this.activeModal.close();
    const modalRef = this.modalService.open(RegistroComponent);
  }
*/
}
