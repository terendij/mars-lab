import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: String, args?: any): String {
    return status === "active" ? "en service" : "hors service";
  }

}
