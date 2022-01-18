import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/guards/auth.guard';
import { DetailsComponent } from '../details/components/details.component';
import { CatalogComponent } from './components/catalog.component';

const catalogRoutes: Routes = [
  { path: 'catalog', component: CatalogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(catalogRoutes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
