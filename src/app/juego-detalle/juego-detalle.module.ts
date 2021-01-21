import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegoContainerComponent } from './juego-container/juego-container.component';
import { CategoriaDetalleComponent } from './categoria-detalle/categoria-detalle.component';
import { ListaComentariosComponent } from './lista-comentarios/lista-comentarios.component';



@NgModule({
  declarations: [JuegoContainerComponent, CategoriaDetalleComponent, ListaComentariosComponent],
  imports: [
    CommonModule
  ]
})
export class JuegoDetalleModule { }
