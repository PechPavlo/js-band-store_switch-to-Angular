import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IBook } from '../interfaces/book.interface';
import { BooksService } from 'src/app/shared/services/books.service';
import { PRICE_OPTIONS } from './constants/priceOptions';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  books: IBook[] = [];
  priceOptions = PRICE_OPTIONS;
  filterBySearch = new FormControl('');
  filterByPrice = new FormControl(this.priceOptions[0].value);

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();

    if (!this.books.length) {
      this.getBooks();
    }
  }

  getBooks(): void {
    this.bookService.getAllBooks().subscribe((books: IBook[]) => {
      this.books = books;
    });
  }
}
