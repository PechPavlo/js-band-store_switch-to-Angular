import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './auth';
import { AuthService } from './auth.service';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  userNameToAuthorize: string = '';
  isAuthorizing: boolean = false;

  constructor(
    private localstorageService: LocalstorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getToken(): void {
    this.isAuthorizing = true;
    this.authService
      .authUser(this.userNameToAuthorize)
      .subscribe((user: User) => {
        this.localstorageService.setLocalData(user);
        this.isAuthorizing = false;
        this.router.navigate(['/catalog']);
      });
  }
}
