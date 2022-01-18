import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName: string | undefined = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
    this.userName = this.auth.getUser()?.username;
  }

  logout() {
    this.auth.logout();
  }
}
