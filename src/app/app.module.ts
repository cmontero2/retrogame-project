import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SeccionesComponent } from './foro/secciones/secciones.component';
import { EntradasComponent } from './foro/entradas/entradas.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriasService } from './categorias/categorias.service';
import { FooterComponent } from './footer/footer.component';
import { NoticiasComponent } from './noticias/noticias.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SeccionesComponent,
    EntradasComponent,
    CategoriasComponent,
    FooterComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
