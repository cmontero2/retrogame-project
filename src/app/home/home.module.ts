import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container/home-container.component';
import { LoginComponent } from './login/login.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiasService } from './noticias/noticias.service';
import { RegistroComponent } from './registro/registro.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [HomeContainerComponent, LoginComponent, NoticiasComponent, RegistroComponent, PerfilComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  exports: [HomeContainerComponent,HomeRoutingModule],
  providers: [NoticiasService]
})
export class HomeModule { }
