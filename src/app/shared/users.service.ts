import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Details} from './users';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getdetails(): Observable<Details> {
    return this.http.get<Details>(`${environment.apiEndPoint}/api/names`);
  }
  postDetails(data: Details): Observable<any> {
    return this.http.post<any>(`${environment.apiEndPoint}/api/names`, data);
  }
  deleteDetails(id: number): Observable<any> {
    return this.http.delete(`${environment.apiEndPoint}/api/names` + '/' + id);
  }
  searchByName(value: string): Observable<Details> {
    return this.http.get<Details>(`${environment.apiEndPoint}/api/names/?name=${value}`);
  }
  editDetails(data: Details , id: number): Observable<any> {
    return this.http.put<Details>(`${environment.apiEndPoint}/api/names/${id}`, data);
  }
  // getproductdetailsbyid(id:number):Observable<pDetails>{
  //   return this.http.get<pDetails>(`${environment.apiEndPoint}/api/pproducts/?productid=${id}`);
  //   }
}
