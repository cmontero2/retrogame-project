import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradasComponent } from '../foro/entradas/entradas.component';
import { EntradaDetalleComponent } from '../foro/entrada-detalle/entrada-detalle.component';
import { SeccionesJuegosComponent } from '../foro/secciones-juegos/secciones-juegos.component';


const routesEntradas: Routes = [
    {path: 'entradas/:id', component: EntradasComponent},
    {path: 'comentarios/:id', component: EntradaDetalleComponent},
    {path: 'secciones/juegos', component: SeccionesJuegosComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routesEntradas)],
    exports: [RouterModule]
})

export class ForoRoutingModule { }