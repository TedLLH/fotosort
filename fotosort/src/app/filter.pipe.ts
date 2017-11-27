import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(photolinks: any, term?: any): any {

    var emptyArray = [{image:'http://www.ellagret.gr/images/no-photo.jpg', tags:[]}]
    
    if(!term) return photolinks;

    // return photolinks
    return photolinks.filter(link => link.tags.toString().toLowerCase().includes(term.toLowerCase()))
  }

}
