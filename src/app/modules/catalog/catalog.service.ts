import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IBook } from './interfaces/book.interface';
import { Router } from '@angular/router';

// To do Transfer this logic to books.service

@Injectable()
export class CatalogService {
  catalogUrl = 'https://js-band-store-api.glitch.me/books';
  constructor(private http: HttpClient, private router: Router) {}

  getCatalog(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.catalogUrl).pipe(
      catchError((error) => {
        if (error?.error?.message === 'Unauthorized') {
          console.log('User is Unauthorized');
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}
