import { Component } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  login: boolean = false;

  constructor(private auth: AuthGuardService, private modalService: NgbModal) {
    this.auth.isLoggedIn()
      .subscribe(
        data => {
          this.login = data;
          console.log('login', this.login);

        },
        error => {
          console.log(error);
        });

  }

  doLogin() {
    console.log("entrando");
    const modalRef = this.modalService.open(LoginComponent);
  }

  logout() {
    this.auth.logout();
  }
}
