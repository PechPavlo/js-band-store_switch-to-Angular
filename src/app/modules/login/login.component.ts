import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private _auth: AuthService) {}

  ngOnInit(): void {}

  login(): void {
    this.isAuthorizing = true;
    this._auth.login(this.userName).subscribe(() => {
      this.isAuthorizing = false;
      this.router.navigate(['/catalog']);
    });
  }
}
