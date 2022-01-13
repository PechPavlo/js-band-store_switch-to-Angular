import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { IUser } from './interfaces/user.interface';
import { AUTH_URL } from './constants/api-urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$ = new BehaviorSubject<IUser | null>(null);
  public isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  public login(name: string) {
    return this.http.post<IUser>(AUTH_URL, { username: name }).pipe(
      catchError((error) => (console.log(error), of(error))),
      tap((user: IUser) => {
        this.user$.next(user);
        this.isLoggedIn = true;
      })
    );
  }
  public logout() {
    this.user$.next(null);
    this.isLoggedIn = false;
  }
}
