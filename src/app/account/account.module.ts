import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [LoginComponent, LayoutComponent, RegisterComponent, AlertComponent],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
