import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../interfaces/book.interface';

@Pipe({ name: 'priceFilter' })
export class PriceFilterPipe implements PipeTransform {
  transform(books: IBook[], filterOptions: string): any {
    const range = filterOptions.split(':');
    const min = +range[0];
    const max = +range[1];
    const filteredBooks = books.filter(
      (book) => book.price >= min && book.price <= max
    );
    return filteredBooks;
  }
}
