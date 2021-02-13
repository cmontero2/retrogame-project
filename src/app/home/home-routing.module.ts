import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from '../helpers/auth.guard';
import { EmpresaComponent } from './empresa/empresa.component';
import { NoticiaDetalleComponent } from './noticia-detalle/noticia-detalle.component';
import { TerminosComponent } from './footer/terminos/terminos.component';
import { PrivacidadComponent } from './footer/privacidad/privacidad.component';
import { CookiesComponent } from './footer/cookies/cookies.component';


const routesHome: Routes = [
    {path: 'registro', component: RegistroComponent},
    {path: 'perfil/:user', component: PerfilComponent},
    {path: 'empresa', component: EmpresaComponent},
    {path: 'noticiaDetalle/:id', component: NoticiaDetalleComponent},
    {path: 'terminos', component: TerminosComponent},
    {path: 'privacidad', component: PrivacidadComponent},
    {path: 'cookies', component: CookiesComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routesHome)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
