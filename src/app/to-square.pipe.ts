import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSquare'
})
export class ToSquarePipe implements PipeTransform {

  transform(value: number): number {
    return value * value;
  }

}
