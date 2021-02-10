import { Component } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  login: boolean = false;
  user: any;
  constructor(private modalService: NgbModal, private AccountService: AccountService) { }
  
  //se necesita suscribir a accountservice para que mantenga actualizado la variable de login
  ngOnInit(): void {
    this.AccountService.user.subscribe(
      usuario=>
      this.user= usuario
    );
    console.log("asadsasdasd " + this.user);
  }

  //modal login
  doLogin() {
    const modalRef = this.modalService.open(LoginComponent);
  }

  //para desloguear
  doLogout() {
    this.AccountService.logout();
  }
}
