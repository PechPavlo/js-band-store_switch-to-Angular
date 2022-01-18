import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogComponent } from './components/catalog.component';
import { CardComponent } from './card/components/card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { BooksService } from 'src/app/shared/services/books.service';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { CatalogFilterPipe } from './pipes/catalog-filter.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { DetailsModule } from '../details/details.module';

@NgModule({
  declarations: [
    CatalogComponent,
    CardComponent,
    CatalogFilterPipe,
    PriceFilterPipe,
  ],
  imports: [
    CommonModule,
    LoadingModule,
    HeaderModule,
    DetailsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatIconModule,
    CatalogRoutingModule,
  ],
  exports: [CatalogComponent, CardComponent],
  providers: [BooksService],
})
export class CatalogModule {}
