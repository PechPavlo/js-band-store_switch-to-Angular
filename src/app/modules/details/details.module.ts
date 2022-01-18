import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details.component';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    HeaderModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [],
  providers: [],
})
export class DetailsModule {}
