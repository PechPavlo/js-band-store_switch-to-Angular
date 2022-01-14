import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { BOOKS_URL } from '../constants/api-urls';
import { IBook } from '../../modules/catalog/interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books$ = new BehaviorSubject<IBook[]>([]);

  constructor(private http: HttpClient, private router: Router) {}

  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(BOOKS_URL).pipe(
      catchError((error) => {
        if (error?.error?.message === 'Unauthorized') {
          console.error('User is Unauthorized');
          this.router.navigate(['/login']);
        }
        return throwError(error);
      }),
      tap((books: IBook[]) => this.books$.next(books))
    );
  }

  getBooks() {
    return this.books$.getValue();
  }

  getBookById(id: string): Observable<IBook> {
    return this.http.get<IBook>(`${BOOKS_URL}/${id}`).pipe(
      catchError((error) => {
        if (error?.error?.message === 'Unauthorized') {
          console.error('User is Unauthorized');
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}
