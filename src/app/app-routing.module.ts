import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { SeccionesComponent } from './foro/secciones/secciones.component';
import { EntradasComponent } from './foro/entradas/entradas.component';
import { LoginComponent } from './home/login/login.component';
import { CategoriaDetalleComponent } from './juegos/categoria-detalle/categoria-detalle.component';
import { RegistroUserComponent } from './home/registroUser/registro-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeContainerComponent},
  { path: 'foro/secciones', component: SeccionesComponent },
  { path: 'foro/entradas', component: EntradasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'juegos', component: CategoriaDetalleComponent },
  { path: 'registroUser', component: RegistroUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
