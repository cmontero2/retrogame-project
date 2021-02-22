import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoContainerComponent } from './foro-container/foro-container.component';
import { SeccionesComponent } from './secciones/secciones.component';
import { SeccionesService } from './secciones/secciones.service';
import { EntradasService } from './entradas/entradas.service';
import { EntradasComponent } from './entradas/entradas.component';
import { EntradaDetalleComponent } from './entrada-detalle/entrada-detalle.component';
import { ForoRoutingModule } from './foro-routing.module';
import { EntradaDetalleService } from './entrada-detalle/entrada-detalle.service';



@NgModule({
  declarations: [ForoContainerComponent, SeccionesComponent, EntradasComponent, EntradaDetalleComponent],
  imports: [
    CommonModule, ForoRoutingModule
  ],
  exports: [ForoContainerComponent],
  providers: [SeccionesService, EntradasService, EntradaDetalleService]
})
export class ForoModule { }