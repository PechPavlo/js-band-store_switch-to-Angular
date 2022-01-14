import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { IBook } from '../interfaces/book.interface';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  books: IBook[] = [];
  filteredBooks: IBook[] = [];

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();

    if (!this.books.length) {
      this.getBooks();
    }
    this.options = this.books.map((book) => book.title.toString());
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        this.filteredBooks = this.books.filter((book) =>
          book.title.toLowerCase().includes(value.toLowerCase())
        );
        return this._filter(value);
      })
    );
  }

  getBooks(): void {
    this.bookService.getAllBooks().subscribe((books: IBook[]) => {
      this.books = books;
      this.options = books.map((book) => book.title.toString());
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map((value) => {
          this.filteredBooks = this.books.filter((book) =>
            book.title.toLowerCase().includes(value.toLowerCase())
          );
          return this._filter(value);
        })
      );
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(value);
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
