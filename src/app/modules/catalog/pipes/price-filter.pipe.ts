import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../interfaces/book.interface';

@Pipe({ name: 'priceFilter' })
export class PriceFilterPipe implements PipeTransform {
  transform(books: IBook[], filterOptions: string): any {
    const [min, max] = filterOptions.split(':');

    const filteredBooks = books.filter(
      (book) => book.price >= +min && book.price <= +max
    );
    return filteredBooks;
  }
}
