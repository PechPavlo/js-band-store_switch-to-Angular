import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './auth';

@Injectable()
export class AuthService {
  authUrl = 'https://js-band-store-api.glitch.me/signin';

  constructor(private http: HttpClient) {}

  authUser(userName: string): Observable<User> {
    return this.http
      .post<User>(this.authUrl, { username: userName })
      .pipe(catchError((error) => (console.log(error), of(error))));
  }
}
