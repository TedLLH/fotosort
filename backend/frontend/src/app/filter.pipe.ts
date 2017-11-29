import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(photos: any, term?: any): any {
    
    if(!term) {return photos}
    else{
    // return photolinks
    return photos.filter(link => link.tags.toString().toLowerCase().includes(term.toLowerCase()))
    }
  }

}
