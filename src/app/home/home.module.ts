import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ScrollBarComponent } from './scroll-bar/scroll-bar.component';
import { LoginComponent } from './login/login.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiasService } from './noticias/noticias.service';


@NgModule({
  declarations: [HomeContainerComponent, ScrollBarComponent, LoginComponent, NoticiasComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeContainerComponent],
  providers: [NoticiasService]
})
export class HomeModule { }
