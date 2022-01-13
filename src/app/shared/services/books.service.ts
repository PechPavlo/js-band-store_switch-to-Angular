import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { BOOKS_URL } from '../constants/api-urls';
import { IBook } from '../../modules/catalog/interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient, private router: Router) {}
  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(BOOKS_URL).pipe(
      catchError((error) => {
        if (error?.error?.message === 'Unauthorized') {
          console.log('User is Unauthorized');
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
  getBookById(id: string) {}
}
