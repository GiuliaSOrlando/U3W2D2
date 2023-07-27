import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      return value.toUpperCase();
    }
    return value;
  }
}
