import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { CatalogRoutingModule } from 'src/app/modules/catalog/catalog-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, CatalogRoutingModule],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
