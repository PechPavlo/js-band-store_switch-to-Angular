import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'name' })
export class CatalogFilterPipe implements PipeTransform {
  transform(value: any): any {}
}
