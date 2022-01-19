import { Album } from './../models/album';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    values: Album[],
    text: string = '',
    columm: string = 'title'
  ): Album[] {
    if (text === '') {
      return values;
    }
    if (!values) {
      return values;
    }

    text = text.toLocaleLowerCase();

    console.log(values);
    console.log(text);
    return values.filter((item) => item[columm].toLowerCase().includes(text));
  }
}
