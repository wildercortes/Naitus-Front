import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { MaterialModule } from '../material/material.module';
import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [UserListComponent],
  imports: [
    MaterialModule,
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    MaterialModule
  ]
})
export class UserModule { }
