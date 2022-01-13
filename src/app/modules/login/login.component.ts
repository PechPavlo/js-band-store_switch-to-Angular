import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string = '';
  isAuthorizing: boolean = false;

  constructor(
    @Inject(AuthService)
    private _auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('auth isLoggedIn', this._auth.isLoggedIn);
  }

  login(): void {
    this.isAuthorizing = true;
    this._auth.login(this.userName).subscribe(() => {
      this.isAuthorizing = false;
      this.router.navigate(['/catalog']);
      console.log('auth isLoggedIn', this._auth.isLoggedIn);
    });
  }
}
