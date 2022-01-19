import { Hero } from './../models/hero';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHero',
})
export class FilterHeroPipe implements PipeTransform {
  transform(
    heros: Hero[],
    text: string = '',
    columm: string = 'publisher'
  ): Hero[] {
    if (text === '') {
      return heros;
    }
    if (!heros) {
      return heros;
    }
    if (text === 'todos') {
      return heros;
    }
    text = text.toLocaleLowerCase();
    return heros.filter((hero) => hero[columm].toLowerCase().includes(text));
  }
}
