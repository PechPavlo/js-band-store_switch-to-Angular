import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
// import { AuthComponent } from 'src/app/auth/auth.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule],
  exports: [],
  providers: [AuthService, AuthInterceptor],
})
export class AuthModule {}
