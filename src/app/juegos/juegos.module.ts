import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegoContainerComponent } from './juego-container/juego-container.component';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos.component';
import { ListaJuegosService } from './lista-juegos/lista-juegos.service';
import { CategoriaDetalleComponent } from './categoria-detalle/categoria-detalle.component';



@NgModule({
  declarations: [JuegoContainerComponent, ListaJuegosComponent, CategoriaDetalleComponent],
  imports: [
    CommonModule
  ],
  exports: [JuegoContainerComponent],
  providers: [ListaJuegosService]
})
export class JuegosModule { }
