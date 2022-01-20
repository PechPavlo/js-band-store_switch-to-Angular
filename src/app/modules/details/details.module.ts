import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details.component';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { LoadingModule } from 'src/app/shared/loading/loading.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    HeaderModule,
    LoadingModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [DetailsComponent],
  providers: [],
})
export class DetailsModule {}
