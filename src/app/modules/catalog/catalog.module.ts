import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components/catalog.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [CatalogComponent, HeaderComponent, CardComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCardModule,
    AppRoutingModule,
  ],
  exports: [CatalogComponent, HeaderComponent, CardComponent],
  providers: [],
})
export class CatalogModule {}
