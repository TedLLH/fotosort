import { Injectable } from '@angular/core';
import * as picasa from 'picasa';
import { OnInit} from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { SignupComponent } from './signup/signup.component'
import { TokenService } from './token.service'

@Injectable()
export class PhotosService implements OnInit{

  photolinks:string[] = [];

  gallery:any = [];

  constructor(private http:Http, private tokenService:TokenService) { 
    // console.log(this.tokenService.token);
    // this.token = JSON.parse(localStorage.getItem('token'));
  }

  ngOnInit(){
  }

  onGetAlbum(){
    return this.http.get('/getAlbum')
  }

  onGetPhoto(album){
    return this.http.post('/getPhoto', album)
  }

  storePhotos(photos){
    this.photolinks = photos;
  }

  getPhotos(){
    return this.photolinks;
  }

  storeGallery(images){
    this.gallery = images;
  }

  getGallery(){
    return this.gallery;
  }


  


}
