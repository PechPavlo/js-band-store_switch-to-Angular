import { Injectable } from '@angular/core';
import { BehaviorSubject, of, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { IUser } from './interfaces/user.interface';
import { AUTH_URL } from './constants/api-urls';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<IUser | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  public getUser() {
    return this.user$.getValue();
  }

  public login(name: string) {
    this.http
      .post<IUser>(AUTH_URL, { username: name })
      .pipe(
        catchError((error) => {
          if (error?.error?.message) {
            console.error(error?.error?.message);
          }
          return throwError(error);
        }),
        tap((user: IUser) => {
          this.user$.next(user);
          this.router.navigate(['/catalog']);
        })
      )
      .subscribe();
  }

  public logout() {
    this.user$.next(null);
  }
}
