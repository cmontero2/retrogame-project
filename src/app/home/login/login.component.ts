import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistroUserComponent } from '../registroUser/registro-user.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  private userName?: String;
  private userPassword?: String;

  constructor(private auth:AuthGuardService, public activeModal: NgbActiveModal, private modalService: NgbModal) { }

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
    const modalRef = this.modalService.open(RegistroUserComponent);
  }

}
