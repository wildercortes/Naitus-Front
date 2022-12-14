import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public Id: string,
  public dialogRef: MatDialogRef<UsereditComponent>,
  public service: UserService
) {

}

ngOnInit(): void {
   this.GetUser();
}

GetUser() {
  this.service.getById(this.Id)
    .subscribe(user => this.LoadForm(user),
      error => console.error(error));

}

LoadForm(user: UserModel) {
  this.service.form?.patchValue({
    name: user.name,
    lastname: user.lastName,
    email: user.email,
    password: user.password,
    rut: user.rut
  });
  this.service.form.controls['birthdate']?.setValue(formatDate(user.birthDate,'yyyy-MM-dd','en'));
}

Edit(value: UserModel) {
  value.id = this.Id;
  this.service.update(value).subscribe(x => this.dialogRef.close(),
  error => console.log("algo salio mal"));
}

}
