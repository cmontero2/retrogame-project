import { Component, OnInit } from '@angular/core';
import { IMail } from '../../../models/Mail';
import { ContactService } from '../../../services/contact.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  mail: IMail = {};
  isMailSent: boolean = false;

  mailForm = this.formBuilder.group({
    nombre: [null, [Validators.required]],
    email: [null, [Validators.required]],
    asunto: [null, [Validators.required]],
    mensaje: [null, [Validators.required]]
  });

  /*mailForm = new FormGroup({
    nombre: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    asunto: new FormControl(null, Validators.required),
    mensaje: new FormControl(null, Validators.required)
  });*/

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {


  }

  send() {
    this.mail.nombre = this.mailForm.get(['nombre'])?.value;
    this.mail.email = this.mailForm.get(['email'])?.value;
    this.mail.asunto = this.mailForm.get(['asunto'])?.value;
    this.mail.mensaje = this.mailForm.get(['mensaje'])?.value;
    
    this.contactService.sendMail(this.mail)
    .subscribe(
      data => {
        this.isMailSent = true;
      }, error => {
        console.log(error);
      }
    )
  }

}
