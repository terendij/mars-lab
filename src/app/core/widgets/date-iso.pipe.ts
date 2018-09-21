import { Pipe, PipeTransform } from '@angular/core';
import {IsoDate} from "../model/model";

@Pipe({
  name: 'dateIso'
})
export class DateIsoPipe implements PipeTransform {

  transform(isoDate: String, args?: any): any {
    const [a, m, d] = isoDate.split('-');
    return `${d}/${m}/${a}`; // = d+'/' ...
  }

}
