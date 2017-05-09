import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpaceLines'
})
export class ReplaceSpaceLinesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? value.replace(/ /g, "&nbsp;") : '<br>';
  }

}
