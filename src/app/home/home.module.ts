import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ScrollBarComponent } from './scroll-bar/scroll-bar.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [HomeContainerComponent, ScrollBarComponent, LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeContainerComponent]
})
export class HomeModule { }
