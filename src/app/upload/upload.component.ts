import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadGameService } from '../services/upload-game.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  gameForm = this.formBuilder.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    descripcion: [null, [Validators.required]],
    visitas: ["0", []],
    empresa_id: [],
    nombre_archivo: [],
    estado: ["P", []]

  });

  constructor(
    private formBuilder: FormBuilder,
    private uploadGameService: UploadGameService
  ) { }

  ngOnInit(): void {

  }

  createGame(): any {
    return {
      nombre: this.gameForm.get(['nombre'])!.value,
      descripcion: this.gameForm.get(['descripcion'])!.value
    }
  }

  upload() {

  }

}
