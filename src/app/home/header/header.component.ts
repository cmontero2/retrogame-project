import { Component } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
  })
export class HeaderComponent {
  login: boolean = false;

  constructor(private auth: AuthGuardService){
    this.auth.isLoggedIn()
    .subscribe(
      data => {
        this.login = data;
        console.log('login',this.login);
        
      },
      error => {
        console.log(error);
      });

  }

  logout(){
    this.auth.logout();
  }
}
