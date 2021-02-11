import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from '../helpers/auth.guard';
import { EmpresaComponent } from './empresa/empresa.component';


const routesHome: Routes = [
    {path: 'registro', component: RegistroComponent},
    {path: 'perfil/:user', component: PerfilComponent},
    {path: 'empresa', component: EmpresaComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routesHome)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
