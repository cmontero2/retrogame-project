import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeModule } from './home/home.module';
import { JuegosModule } from './juegos/juegos.module';
import { SeccionesComponent } from './foro/secciones/secciones.component';
import { EntradasComponent } from './foro/entradas/entradas.component';
import { CategoriasComponent } from './home/categorias/categorias.component';
import { CategoriasService } from './home/categorias/categorias.service';
import { FooterComponent } from './home/footer/footer.component';
import { ForoContainerComponent } from './foro/foro-container/foro-container.component';
import { EntradaDetalleComponent } from './foro/entrada-detalle/entrada-detalle.component';
import { ScrollBarModule } from './scroll-bar/scroll-bar.module';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeccionesComponent,
    EntradasComponent,
    CategoriasComponent,
    FooterComponent,
    ForoContainerComponent,
    EntradaDetalleComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    JuegosModule,
    ScrollBarModule
  ],
  exports: [HomeModule],
  providers: [CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
