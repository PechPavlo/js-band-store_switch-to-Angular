import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

@Injectable()
// @Injectable({
//   providedIn: 'root',
// })
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authHeader = 'Bearer 1A2b3C4d5E6f7G8h9IAgBKClD';

    const authReq = req.clone({
      headers: req.headers.set('Authorization', authHeader),
    });
    return next.handle(req);
  }
}
