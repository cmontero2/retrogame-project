import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoContainerComponent } from '../juego-detalle/juego-container/juego-container.component';


const routesJuegos: Routes = [
    {path: 'juego', component: JuegoContainerComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routesJuegos)],
    exports: [RouterModule]
})

export class JuegosRoutingModule { }