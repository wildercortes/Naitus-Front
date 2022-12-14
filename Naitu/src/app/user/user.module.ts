import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { MaterialModule } from '../material/material.module';
import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsercreateComponent } from './components/usercreate/usercreate.component';
import { UserdeleteComponent } from './components/userdelete/userdelete.component';
import { UsereditComponent } from './components/useredit/useredit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserListComponent, UsercreateComponent, UserdeleteComponent, UsereditComponent],
  imports: [
    MaterialModule,
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
