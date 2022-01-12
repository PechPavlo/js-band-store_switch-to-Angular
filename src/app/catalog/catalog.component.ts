import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Book } from './catalog';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks(): void {
    this.catalogService.getCatalog().subscribe((books: Book[]) => {
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
