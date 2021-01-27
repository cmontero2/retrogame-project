import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  private userName?: String;
  private userPassword?: String;

  constructor(private auth:AuthGuardService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
   
  }

  login(){
    this.auth.login();
    this.activeModal.close();
  }

  logout(){
    this.auth.login();
  }

}
