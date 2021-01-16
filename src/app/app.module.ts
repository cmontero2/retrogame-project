import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
import { PruebaComponent } from './prueba/prueba.component';
=======
import { HomeComponent } from './home/home.component';
import { SeccionesComponent } from './foro/secciones/secciones.component';
import { EntradasComponent } from './foro/entradas/entradas.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriasService } from './categorias/categorias.service';
>>>>>>> 824bf28ff7c3a72d4b00a541b427221721dab5ad


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    PruebaComponent,
=======
    HomeComponent,
    SeccionesComponent,
    EntradasComponent,
    CategoriasComponent,
>>>>>>> 824bf28ff7c3a72d4b00a541b427221721dab5ad
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
