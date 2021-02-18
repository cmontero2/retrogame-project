import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadGameService } from '../../services/upload-game.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  gameForm = this.formBuilder.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    descripcion: [null, [Validators.required]],
    visitas: ["0", []],
    empresa_id: [null],
    nombre_archivo: [null, []],
    estado: ["P", []]
  });

  constructor(
    private formBuilder: FormBuilder,
    private uploadGameService: UploadGameService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {


  }

  private createFormGame(): any {
    let espacios = " ";

    return {
      nombre: this.gameForm.get(['nombre'])?.value,
      descripcion: this.gameForm.get(['descripcion'])?.value,
      visitas: this.gameForm.get(['visitas'])?.value,
      empresa_id: this.accountService.userValue.id,
      nombre_archivo: this.gameForm.get(['nombre'])?.value.replaceAll(espacios, "").toLowerCase(),
      estado: this.gameForm.get(['estado'])?.value
    }
  }

  upload() {
    const juego = this.createFormGame();
    this.uploadGameService.upload(juego)
    .subscribe(
      data => {

      }, error => {
        console.log(error);
      }
    )
    
  }

}
