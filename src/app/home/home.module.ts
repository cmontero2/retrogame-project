import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container/home-container.component';
import { LoginComponent } from './login/login.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiasService } from './noticias/noticias.service';
import { RegistroUserComponent } from './registroUser/registro-user.component';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeContainerComponent, LoginComponent, NoticiasComponent, RegistroUserComponent, RegistroEmpresaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeContainerComponent,HomeRoutingModule],
  providers: [NoticiasService]
})
export class HomeModule { }
