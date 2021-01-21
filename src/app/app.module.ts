import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeModule } from './home/home.module';
import { SeccionesComponent } from './foro/secciones/secciones.component';
import { EntradasComponent } from './foro/entradas/entradas.component';
import { CategoriasComponent } from './home/categorias/categorias.component';
import { CategoriasService } from './home/categorias/categorias.service';
import { FooterComponent } from './home/footer/footer.component';
<<<<<<< HEAD
import { CategoriaDetalleComponent } from './juegos/categoria-detalle/categoria-detalle.component';
=======
>>>>>>> a40f48eaff6313a8e4585cb376fdb98bac0b9ca1

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeccionesComponent,
    EntradasComponent,
    CategoriasComponent,
<<<<<<< HEAD
    FooterComponent,
=======
    FooterComponent
>>>>>>> a40f48eaff6313a8e4585cb376fdb98bac0b9ca1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  exports: [HomeModule],
  providers: [CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
