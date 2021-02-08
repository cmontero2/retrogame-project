import { Component } from '@angular/core';
import { AuthGuard } from '../../services/auth-guard';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  login: boolean = false;

  constructor(private modalService: NgbModal) {
  }
  
}
