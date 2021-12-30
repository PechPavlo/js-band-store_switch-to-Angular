import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CatalogComponent,
    DetailsComponent,
    CartComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
