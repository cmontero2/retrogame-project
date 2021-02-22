import { Component, Input } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { AccountService } from '../../services/account.service';
import { User } from '../../account/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: any;
  login: boolean = false;
  
  constructor(private modalService: NgbModal, private AccountService: AccountService) {
    this.user = new User();
  }
  
  //se necesita suscribir a accountservice para que mantenga actualizado la variable de login
  ngOnInit(): void {
    //this.user = localStorage.getItem('user');
  
    this.AccountService.user.subscribe(
      data => {
        
        this.user = data ? data : new User();
  
      }

    );
    
    
  }

  //modal login
  doLogin() {
    this.modalService.open(LoginComponent);
  }

  //para desloguear
  doLogout() {
    this.AccountService.logout();
  }
}
