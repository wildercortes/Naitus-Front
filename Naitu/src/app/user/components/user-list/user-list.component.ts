import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/service/user.service';
import { UsercreateComponent } from '../usercreate/usercreate.component';
import { UserdeleteComponent } from '../userdelete/userdelete.component';
import { UsereditComponent } from '../useredit/useredit.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private service: UserService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  dataSource: MatTableDataSource<UserModel>;
  displayedColumns: string[] = ['rut', 'name', 'lastName', 'email','password','birthDate', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<UserModel>;

  ngOnInit(): void {
    this.LoadTable();
  }

  LoadTable() {
    this.service.getAll().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })

  }

  ShowCreateDialog() {
    const dialogRef = this.dialog.open(UsercreateComponent, { width: '280px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {
        console.log("exito");
        this.LoadTable();
      }
    });
  }


  ShowEditDialog(value: UserModel) {
    const dialogRef = this.dialog.open(UsereditComponent, { width: '280px', data: value.id });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {
        this.LoadTable();
      }
    });
  }

  ShowDeleteDialog(value: UserModel) {
    const dialogRef = this.dialog.open(UserdeleteComponent, {
      width: '289px',
      data: value
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {
        this.LoadTable();
      }
    });

  }


}
