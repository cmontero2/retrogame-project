import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ScrollBarComponent } from './scroll-bar/scroll-bar.component';


@NgModule({
  declarations: [HomeContainerComponent, ScrollBarComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeContainerComponent]
})
export class HomeModule { }
