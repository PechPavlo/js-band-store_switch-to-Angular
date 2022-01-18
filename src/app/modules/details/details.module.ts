import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details.component';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { LoadingModule } from 'src/app/shared/loading/loading.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, HeaderModule, LoadingModule],
  exports: [DetailsComponent],
  providers: [],
})
export class DetailsModule {}
