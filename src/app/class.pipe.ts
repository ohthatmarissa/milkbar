import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'class'
})
export class ClassPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
