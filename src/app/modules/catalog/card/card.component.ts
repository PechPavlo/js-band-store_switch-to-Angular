import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../interfaces/book.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() book: IBook | undefined;

  constructor() {}

  ngOnInit(): void {}
}
