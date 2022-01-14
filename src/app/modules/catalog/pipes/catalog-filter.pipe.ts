import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../interfaces/book.interface';

@Pipe({ name: 'catalogFilter' })
export class CatalogFilterPipe implements PipeTransform {
  transform(books: IBook[], filterOptions: string): any {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(filterOptions)
    );
    return filteredBooks;
  }
}
