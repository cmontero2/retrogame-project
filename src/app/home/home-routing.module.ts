import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroUserComponent } from './registroUser/registro-user.component';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';


const routesHome: Routes = [
    {path: 'registro-user', component: RegistroUserComponent},
    {path: 'registroEmpresa', component: RegistroEmpresaComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routesHome)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
