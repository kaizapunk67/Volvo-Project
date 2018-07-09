import { TestBed, inject } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {Details} from './users';

describe('UsersService', () => {
  let httpMock: HttpTestingController;
  let usersService: UsersService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
      imports: [
        HttpClientTestingModule
       ]
    });
    usersService = TestBed.get(UsersService);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
  it('should return good response with data', (done) => {
    usersService.getdetails()
                  .subscribe ( products => {
                    expect(products.length).toBe(1);
                    expect(products).toEqual(<Details[]> [{name: 'Krishna'}]);
                    done();
                  });

    const nameRequest = httpMock.expectOne('http://localhost:7070/api/names');
    // respond with json data
    nameRequest.flush([{name: 'Krishna'}]);
    httpMock.verify();
  });
});

