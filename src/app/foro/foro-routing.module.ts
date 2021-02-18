import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradasComponent } from '../foro/entradas/entradas.component'


const routesEntradas: Routes = [
    {path: 'entradas/:id', component: EntradasComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routesEntradas)],
    exports: [RouterModule]
})

export class ForoRoutingModule { }