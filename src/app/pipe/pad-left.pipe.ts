import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padLeft'
})
export class PadLeftPipe implements PipeTransform
{
  transform(value: any, symbol: string, length: number): any
  {
    let str = '' + value.toString();
    return str.length >= length ? str : new Array(length - str.length + 1).join(symbol) + str;
  }

}