import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-userdelete',
  templateUrl: './userdelete.component.html',
  styleUrls: ['./userdelete.component.css']
})
export class UserdeleteComponent implements OnInit {

  name: string;
  constructor(public dialogRef: MatDialogRef<UserdeleteComponent>,
    public service: UserService,
    @Inject(MAT_DIALOG_DATA) public data: UserModel) { }

  ngOnInit(): void {
    this.name = this.data.name;
  }

  Delete() {
    this.service.delete(this.data.id).subscribe(x => this.dialogRef.close(),
    error => console.log("algo salio mal"));
  }
}
