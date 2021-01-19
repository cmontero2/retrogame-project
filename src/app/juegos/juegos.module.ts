import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos.component';
import { JuegoContainerComponent } from './juego-container/juego-container.component';



@NgModule({
  declarations: [ListaJuegosComponent, JuegoContainerComponent],
  imports: [
    CommonModule
  ]
})
export class JuegosModule { }
