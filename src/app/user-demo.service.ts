import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserDemoService {
  constructor(private http: HttpClient) {}

  addUser(user): Observable<any> {
    console.log('Executed');
    return this.http.post<any>(
      `localhost:8080/users/add?name=efe&email=some@mail.com`,
      ''
    );
  }
}
