import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaJuegosService } from '../services/lista-juegos.service';
import { JuegoDetalleContainerComponent } from './juego-detalle-container/juego-detalle-container.component';
import { JuegoDetalleDescripcionComponent } from './juego-detalle-descripcion/juego-detalle-descripcion.component';
import { JuegoComponent } from './juego/juego.component';
import { JuegosEmpresaComponent } from './juegos-empresa/juegos-empresa.component';


@NgModule({
  declarations: [JuegoDetalleContainerComponent, JuegoDetalleDescripcionComponent, JuegoComponent, JuegosEmpresaComponent],
  imports: [
    CommonModule
  ],
  exports: [JuegoDetalleContainerComponent],
  providers: [ListaJuegosService]
})
export class JuegoDetalleModule { }
