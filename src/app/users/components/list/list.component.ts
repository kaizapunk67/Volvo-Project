import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../../shared/users.service';
import {Details} from '../../../shared/users';
import {MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditorComponent } from '../editor/editor.component';
import { FormControl, FormGroup, Validator, FormBuilder, Validators} from '@angular/forms';
import { Observable, empty } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UsersService]
})
export class ListComponent implements OnInit {
  userDetails: Details;
  constructor(private listService: UsersService, public dialog: MatDialog) { }
  displayedColumns = ['Id', 'Name', 'Surname', 'Birthdate', 'Phone', 'City', 'Street'];
  dataSource = new MatTableDataSource<Details>();
  @ViewChild(MatSort) sort: MatSort;
  nameValue = new FormControl();
  filteredOptions: Observable<string[]>;
  names: string[] = [];
  ngOnInit() {
    this.listService.getdetails().subscribe(
      data => {
        this.userDetails = data;
        for (const x of this.userDetails) {
          this.names.push(x.name);
        }
        this.dataSource.data = Object.values(this.userDetails);
        this.dataSource.sort = this.sort;
      }
    );
    this.filteredOptions = this.nameValue.valueChanges
    .pipe( startWith(''),
    map(val => this.CityFilter(val))
);
  }
  CityFilter(val: string): string[] {
    if  (this.names) {
    return this.names.filter(option =>
    option.toLowerCase().includes(val.toLowerCase()));
    }
    }
  openDialog(x): void {
    const dialogRef = this.dialog.open(EditorComponent, {
      height : '500px',
      data : {details: x}
  });
  console.log(x);
  }
  delete(index: number, x) {
    console.log(x.id);
    this.userDetails.splice(index, 1);
    this.listService.deleteDetails(x.id).subscribe();
  }
  search(value) {
    this.listService.searchByName(value).subscribe(
        data => {
          this.userDetails = data;
          this.dataSource.data = Object.values(this.userDetails);
          this.dataSource.sort = this.sort;
        }
      );
  }
  clear() {
    this.nameValue.reset();
    this.listService.getdetails().subscribe(
      data => {
        this.userDetails = data;
        this.dataSource.data = Object.values(this.userDetails);
        this.dataSource.sort = this.sort;
      });
  }
}
