import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilterTerm'
})
export class FilterTermPipe implements PipeTransform {

  transform(value: [], searchTerm: string): [] {
    const regex = new RegExp(searchTerm, 'ug');
    // @ts-ignore
    // tslint:disable-next-line:no-shadowed-variable
    return value.filter(value => regex.test(String(value)));
  }

}
