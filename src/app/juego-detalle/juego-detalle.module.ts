import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegoContainerComponent } from './juego-container/juego-container.component';
import { CategoriaDetalleComponent } from '../juegos/categoria-detalle/categoria-detalle.component';
import { JuegoComponent } from './juego/juego.component';
import { JuegoDescripcionComponent } from './juego-descripcion/juego-descripcion.component';



@NgModule({
  declarations: [JuegoContainerComponent, CategoriaDetalleComponent, JuegoComponent, JuegoDescripcionComponent],
  imports: [
    CommonModule
  ]
})
export class JuegoDetalleModule { }
