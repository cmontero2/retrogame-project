import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegoDetalleService } from '../services/juego-detalle.service';
import { JuegoDetalleContainerComponent } from './juego-detalle-container/juego-detalle-container.component';
import { JuegoDetalleDescripcionComponent } from './juego-detalle-descripcion/juego-detalle-descripcion.component';
import { JuegoComponent } from './juego/juego.component';


@NgModule({
  declarations: [JuegoDetalleContainerComponent, JuegoDetalleDescripcionComponent, JuegoComponent],
  imports: [
    CommonModule
  ],
  exports: [JuegoDetalleContainerComponent],
  providers: [JuegoDetalleService]
})
export class JuegoDetalleModule { }
