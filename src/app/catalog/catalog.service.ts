import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Book } from './catalog';
import { LocalstorageService } from '../services/localstorage.service';
import { Router } from '@angular/router';

@Injectable()
export class CatalogService {
  catalogUrl = 'https://js-band-store-api.glitch.me/books';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService,
    private router: Router
  ) {}

  getCatalog(): Observable<Book[]> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${
          this.localStorageService.getLocalData()?.token
        }`,
      }),
    };

    return this.http.get<Book[]>(this.catalogUrl, options).pipe(
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
