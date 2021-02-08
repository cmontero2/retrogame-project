import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeModule } from './home/home.module';
import { JuegosModule } from './juegos/juegos.module';
import { ForoModule } from './foro/foro.module';
import { CategoriasComponent } from './home/categorias/categorias.component';
import { CategoriasService } from './home/categorias/categorias.service';
import { FooterComponent } from './home/footer/footer.component';
import { ScrollBarModule } from './scroll-bar/scroll-bar.module';
import { ContactoComponent } from './contacto/contacto.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriasComponent,
    FooterComponent,
    ContactoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    JuegosModule,
    ForoModule,
    ScrollBarModule, 
    HttpClientModule
  ],
  exports: [HomeModule],
  providers: [CategoriasService, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
