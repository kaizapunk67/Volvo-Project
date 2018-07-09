import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ListComponent } from './list.component';
import { UsersService } from '../../../shared/users.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';
import 'rxjs/Rx';
import {Details} from '../../../shared/users';
import { Observable } from 'rxjs/Observable';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
fdescribe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let userservice: UsersService;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    userservice = fixture.debugElement.injector.get(userservice);
    userservice.getdetails = function() {
     return Observable.of(<Details[]>[{name: 'Krishna', surname: 'surname3', phone: 812312312, city: 'Wroclaw',
     street: 'Himalajska', number: 4,
     id: 4},
    {name: 'vidya', surname: 'sagar', birthDate: '10-5-1990', phone: 852687, city: 'bangalore', street: 'basavangudi', number: 3, id: 5}] );
    };
    fixture.detectChanges();
  });
  it('length Should be 2', () => {
    expect(Comment).toBeTruthy();
    fixture.detectChanges();
    element = fixture.nativeElement;
    expect(element.querySelctorAll('table').length).toBe(2);
  }
);

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
