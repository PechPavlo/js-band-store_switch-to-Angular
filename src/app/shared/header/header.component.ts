import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName: string | undefined = '';

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
    this._auth.user$.subscribe((user) => {
      this.userName = user?.username;
    });
  }
}
