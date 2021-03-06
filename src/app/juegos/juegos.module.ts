import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegoContainerComponent } from './juego-container/juego-container.component';
import { ListaJuegosComponent } from './lista-juegos/lista-juegos.component';
import { ListaJuegosService } from '../services/lista-juegos.service';
import { CategoriaDetalleComponent } from './categoria-detalle/categoria-detalle.component';
import { JuegosRoutingModule } from './juegos-routing.module';


@NgModule({
  declarations: [JuegoContainerComponent, ListaJuegosComponent, CategoriaDetalleComponent],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ],
  exports: [JuegoContainerComponent, JuegosRoutingModule],
  providers: [ListaJuegosService]
})
export class JuegosModule { }
