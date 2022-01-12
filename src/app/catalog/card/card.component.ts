import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../catalog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() book: Book | undefined;

  constructor() {}

  ngOnInit(): void {}
}
