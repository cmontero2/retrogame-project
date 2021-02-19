import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadGameService } from '../../services/upload-game.service';
import { AccountService } from '../../services/account.service';
import { JuegoCategoria } from 'src/app/models/JuegoCategoria';
import { ListaJuegosService } from 'src/app/services/lista-juegos.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  juegoCategoria: JuegoCategoria = {};
  categoriaSeleccionada: number = 1;
  verCategoriaSeleccionada: number = 0;

  juego_id!: number;

  gameForm = this.formBuilder.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    descripcion: [null, [Validators.required]],
    categoria_id: [null, [Validators.required]],
    visitas: ["0", []],
    empresa_id: [null],
    nombre_archivo: [null, []],
    estado: ["P", []],
    iframe_url: [null, [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private uploadGameService: UploadGameService,
    private accountService: AccountService,
    private listaJuegosService: ListaJuegosService
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
      estado: this.gameForm.get(['estado'])?.value,
      iframe_url: this.gameForm.get(['iframe_url'])?.value
    }
  }

  upload() {
    var juego = this.createFormGame();

    //POST del juego a la tabla Juegos
    this.uploadGameService.upload(juego)
    .subscribe(
      data => {

        //Busca el ID del nuevo juego creado
        this.listaJuegosService.findByName(juego.nombre)
        .subscribe(
          data => {

            //Set del objeto juegoCategoria
            this.juegoCategoria.juego_id = data[0].id;
            this.juegoCategoria.categoria_id = Number(this.gameForm.get(['categoria_id'])?.value);
            this.juegoCategoria.usuario_id = Number(this.accountService.userValue.id);

            //POST del juegoCategoria a la tabla JuegosCategoria
            this.uploadGameService.uploadToGameCategory(this.juegoCategoria)
            .subscribe(
              data => {

              }, error => {
                console.log(error);
              }
            );
          }, error => {
            console.log(error);
          }
        )

      }, error => {
        console.log(error);
      }
    )
    
  }

}