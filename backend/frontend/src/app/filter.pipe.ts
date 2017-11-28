import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(photolinks: any, term?: any): any {
    
    if(!term) return photolinks;

    // return photolinks
    return photolinks.filter(link => link.tags.toString().toLowerCase().includes(term.toLowerCase()))
  }

}