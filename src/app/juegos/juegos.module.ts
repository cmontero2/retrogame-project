import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos.component';
import { JuegoContainerComponent } from './juego-container/juego-container.component';
import { CategoriaDetalleComponent } from './categoria-detalle/categoria-detalle.component';



@NgModule({
  declarations: [ListaJuegosComponent, JuegoContainerComponent, CategoriaDetalleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CategoriaDetalleComponent 
  ]
})
export class JuegosModule { }
