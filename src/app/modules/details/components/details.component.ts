import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  bookId: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = Number(routeParams.get('id'));
    this.bookId = bookIdFromRoute;
  }
}
