import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IBook } from '../interfaces/book.interface';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  books: IBook[] = [];
  priceOptions = [
    { value: '0:Infinity', title: 'Price' },
    { value: '0:25', title: '0 < price < 25' },
    { value: '25:50', title: '25 < price < 50' },
    { value: '50:Infinity', title: 'price > 50' },
  ];
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
