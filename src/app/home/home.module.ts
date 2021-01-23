import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ScrollBarComponent } from './scroll-bar/scroll-bar.component';
import { LoginComponent } from './login/login.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiasService } from './noticias/noticias.service';
import { RegistroUserComponent } from './registroUser/registro-user.component';


@NgModule({
  declarations: [HomeContainerComponent, ScrollBarComponent, LoginComponent, NoticiasComponent, RegistroUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'registro-user', component: RegistroUserComponent}
    ])
  ],
  exports: [HomeContainerComponent],
  providers: [NoticiasService]
})
export class HomeModule { }
