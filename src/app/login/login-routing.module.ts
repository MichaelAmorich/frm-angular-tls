import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
