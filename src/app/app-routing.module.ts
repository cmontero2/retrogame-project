import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { ForoContainerComponent } from './foro/foro-container/foro-container.component';
import { EntradaDetalleComponent } from './foro/entrada-detalle/entrada-detalle.component';
import { SeccionesComponent } from './foro/secciones/secciones.component';
import { EntradasComponent } from './foro/entradas/entradas.component';
import { LoginComponent } from './home/login/login.component';
import { RegistroUserComponent } from './home/registroUser/registro-user.component';
import { JuegoContainerComponent } from './juegos/juego-container/juego-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeContainerComponent},
  { path: 'foro/foro-container', component: ForoContainerComponent },
  { path: 'foro/entrada-detalle', component: EntradaDetalleComponent },
  { path: 'foro/secciones', component: SeccionesComponent },
  { path: 'foro/entradas', component: EntradasComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'juegos', component: JuegoContainerComponent },
  { path: 'juegos/:id', component: JuegoContainerComponent},
  { path: 'registro-user', component: RegistroUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
