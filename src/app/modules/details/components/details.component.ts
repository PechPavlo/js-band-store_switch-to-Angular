import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';
import { IBook } from '../../catalog/interfaces/book.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  bookId: number = 0;
  book: IBook | undefined;
  bookCountInCart = new FormControl(1);

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = Number(routeParams.get('id'));
    this.bookId = bookIdFromRoute;
    this.getBook(bookIdFromRoute.toString());
  }
  getBook(id: string) {
    this.booksService.getBookById(id).subscribe((book) => {
      this.book = book;
    });
  }
}
