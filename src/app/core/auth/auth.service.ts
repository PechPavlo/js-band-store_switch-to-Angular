import { Injectable } from '@angular/core';
import { BehaviorSubject, of, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { IUser } from './interfaces/user.interface';
import { AUTH_URL } from './constants/api-urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$ = new BehaviorSubject<IUser | null>(null);

  constructor(private http: HttpClient) {}

  public login(name: string) {
    return this.http.post<IUser>(AUTH_URL, { username: name }).pipe(
      catchError((error) => (console.log(error), of(error))),
      tap((user: IUser) => {
        this.user$.next(user);
      })
    );
  }
  public logout() {
    this.user$.next(null);
  }
}
