import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoDetalleContainerComponent } from '../juego-detalle/juego-detalle-container/juego-detalle-container.component'


const routesJuegos: Routes = [
    {path: 'juego/:id', component: JuegoDetalleContainerComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routesJuegos)],
    exports: [RouterModule]
})

export class JuegosRoutingModule { }