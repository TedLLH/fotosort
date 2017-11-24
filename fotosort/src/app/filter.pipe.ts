import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(photolinks: any, term?: any): any {

    var emptyArray = [{image:'http://www.ellagret.gr/images/no-photo.jpg', tags:[]}]
    
    if(term.length == 0) return photolinks;

    var correctTerm = 0;

    term.forEach((c)=>{
      photolinks.forEach((n)=>{
        if(n.includes(c)){
          correctTerm ++;
        }
      })
    })
      if(correctTerm !== 0){
        return photolinks
      } else {
        return emptyArray
      }
    // return photolinks.tags.filter(link => link.tags.toString().toLowerCase().includes(term.toLowerCase()))
  }

}
