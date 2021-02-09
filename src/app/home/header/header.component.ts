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

  constructor(private modalService: NgbModal) { }
  //modal login
  doLogin() {
    const modalRef = this.modalService.open(LoginComponent);
  }

  logout() {

  }
}
