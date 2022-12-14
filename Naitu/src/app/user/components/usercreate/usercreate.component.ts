import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UsercreateComponent>,
    public service: UserService,
  ) {}

  ngOnInit(): void {
    this.service.form.reset();
  }

  Crear(value: UserModel) {
    console.log("esto envio");
    console.log(value);
    this.service.add(value).subscribe(x => this.dialogRef.close(),
    error => console.log("algo salio mal"));
  }

}
