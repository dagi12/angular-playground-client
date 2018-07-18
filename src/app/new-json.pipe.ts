import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'newJson'
})
export class NewJsonPipe implements PipeTransform {

  transform(pipeValue: any, args?: any): any {
    let cache = [];
    return JSON.stringify(pipeValue, function (key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Duplicate reference found
          try {
            // If this value does not reference a parent it can be deduped
            return JSON.parse(JSON.stringify(value));
          } catch (error) {
            // discard key if value cannot be deduped
            return;
          }
        }
        // Store value in our collection
        cache.push(value);
      }
      cache = null;
      return value;
    });
  }

}
