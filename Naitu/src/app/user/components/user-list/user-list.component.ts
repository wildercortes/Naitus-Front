import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/service/user.service';


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
  displayedColumns: string[] = ['id', 'rut', 'name', 'lastname', 'email','password','birthdate'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<UserModel>;
  searchKey = '';


  ngOnInit(): void {
    this.LoadTable();
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    
  }


  LoadTable() {

    this.service.getAll().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      console.log("respondio");
      console.log(this.dataSource.data);
    })

  }

  ShowCreateDialog() {
    
  }


  ShowEditDialog(value: UserModel) {
    
  }

  ShowDeleteDialog(value: UserModel) {
    
  }


}
