import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradasComponent } from '../foro/entradas/entradas.component'
import { EntradaDetalleComponent } from '../foro/entrada-detalle/entrada-detalle.component'


const routesEntradas: Routes = [
    {path: 'entradas/:id', component: EntradasComponent},
    {path: 'comentarios/:id', component: EntradaDetalleComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routesEntradas)],
    exports: [RouterModule]
})

export class ForoRoutingModule { }