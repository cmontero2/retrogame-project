import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoContainerComponent } from './foro-container/foro-container.component';
import { SeccionesComponent } from './secciones/secciones.component';
import { SeccionesService } from './secciones/secciones.service';
import { EntradasComponent } from './entradas/entradas.component';
import { EntradaDetalleComponent } from './entrada-detalle/entrada-detalle.component';



@NgModule({
  declarations: [ForoContainerComponent, SeccionesComponent, EntradasComponent, EntradaDetalleComponent],
  imports: [
    CommonModule
  ],
  exports: [ForoContainerComponent],
  providers: [SeccionesService]
})
export class ForoModule { }