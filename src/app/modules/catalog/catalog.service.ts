import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IBook } from './interfaces/book.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

// To do Transfer this logic to books.service

@Injectable()
export class CatalogService {
  catalogUrl = 'https://js-band-store-api.glitch.me/books';
  token: string | undefined = '';
  constructor(
    private http: HttpClient,
    private _auth: AuthService,
    private router: Router
  ) {}

  getCatalog(): Observable<IBook[]> {
    this._auth.user$.subscribe((value) => (this.token = value?.token));
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };

    return this.http.get<IBook[]>(this.catalogUrl, options).pipe(
      catchError((error) => {
        if (error?.error?.message === 'Unauthorized') {
          console.log('User is Unauthorized');
          this.router.navigate(['/']);
        }
        return throwError(error);
      })
    );
  }
}
