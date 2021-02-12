import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from '../helpers/auth.guard';
import { EmpresaComponent } from './empresa/empresa.component';
import { NoticiaDetalleComponent } from './noticia-detalle/noticia-detalle.component';


const routesHome: Routes = [
    {path: 'registro', component: RegistroComponent},
    {path: 'perfil/:user', component: PerfilComponent},
    {path: 'empresa', component: EmpresaComponent},
    {path: 'noticiaDetalle/:id', component: NoticiaDetalleComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routesHome)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
