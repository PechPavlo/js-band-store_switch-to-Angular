import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';
import { IBook } from '../../catalog/interfaces/book.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  book: IBook | undefined;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = routeParams.get('id') || '';
    this.getBook(bookIdFromRoute);
  }
  getBook(id: string) {
    this.booksService.getBookById(id).subscribe((book) => {
      this.book = book;
    });
  }
}
