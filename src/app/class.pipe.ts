import { Pipe, PipeTransform } from '@angular/core';
import { Class } from './class.model';

@Pipe({
  name: 'class'
})
export class ClassPipe implements PipeTransform {

  transform(input: Class[], location: string): Class[] {
    let output: Class[] = [];
    if (input){
    for (let each of input) {
      if (each.location == location) {
        output.push(each)
      }
    }
  }
    return output;
  }

}
