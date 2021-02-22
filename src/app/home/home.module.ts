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
import { EmpresaComponent } from './empresa/empresa.component';
import { NoticiaDetalleComponent } from './noticia-detalle/noticia-detalle.component';
import { TerminosComponent } from './footer/terminos/terminos.component';
import { PrivacidadComponent } from './footer/privacidad/privacidad.component';
import { CookiesComponent } from './footer/cookies/cookies.component';
import { PerfilUpdateComponent } from './perfil/perfil-update/perfil-update.component';
import { MasjugadosComponent } from './masjugados/masjugados.component';
import { ContactoComponent } from './footer/contacto/contacto.component';

@NgModule({
  declarations: [HomeContainerComponent, LoginComponent, NoticiasComponent, RegistroComponent, PerfilComponent, EmpresaComponent, NoticiaDetalleComponent, TerminosComponent, PrivacidadComponent, CookiesComponent, PerfilUpdateComponent, MasjugadosComponent, ContactoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  exports: [HomeContainerComponent,HomeRoutingModule],
  providers: [NoticiasService]
})
export class HomeModule { }
