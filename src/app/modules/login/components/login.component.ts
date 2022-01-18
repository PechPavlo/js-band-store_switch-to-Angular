import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(16),
  ]);
  isAuthorizing: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  login(): void {
    this.isAuthorizing = true;
    this.auth.login(this.userName.value);
  }
}
