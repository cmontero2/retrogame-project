import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from '../services/auth-guard';


const routesHome: Routes = [
    {path: 'registro', component: RegistroComponent},
    {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routesHome)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
