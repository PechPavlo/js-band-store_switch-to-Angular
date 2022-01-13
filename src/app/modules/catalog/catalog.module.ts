import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components/catalog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/components/card.component';
import { AppRoutingModule } from '../../app-routing.module';
import { BooksService } from 'src/app/shared/services/books.service';
import { HeaderModule } from 'src/app/shared/header/header.module';

@NgModule({
  declarations: [CatalogComponent, CardComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCardModule,
    AppRoutingModule,
  ],
  exports: [CatalogComponent, CardComponent],
  providers: [BooksService],
})
export class CatalogModule {}
