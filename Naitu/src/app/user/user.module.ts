import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { MaterialModule } from '../material/material.module';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [UserListComponent],
  imports: [
    MaterialModule,
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    CommonModule,
    MaterialModule
  ]
})
export class UserModule { }
