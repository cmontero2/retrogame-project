import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.scss']
})
export class RegistroUserComponent implements OnInit {


  constructor(public activeModal: NgbActiveModal) { }
  
  ngOnInit(): void {
  }

  cerrarModal(){
    this.activeModal.close();
  }

  cambioSelect(){
    console.log("entro");
  }
}
