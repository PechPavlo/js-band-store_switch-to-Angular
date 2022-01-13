import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './modules/login/login.component';
import { CatalogComponent } from './modules/catalog/components/catalog.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './modules/cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LocalstorageService } from './services/localstorage.service';
import { CatalogService } from './modules/catalog/catalog.service';
import { AuthModule } from './core/auth/auth.module';
import { CatalogModule } from './modules/catalog/catalog.module';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    CartComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    AuthModule,
    CatalogModule,
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
{
}
