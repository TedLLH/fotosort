import { Injectable } from '@angular/core';
import * as picasa from 'picasa';
import { OnInit} from '@angular/core';

import { SignupComponent } from './signup/signup.component'
import { TokenService } from './token.service'

@Injectable()
export class PhotosService implements OnInit{

  token:string;

  constructor(private tokenService:TokenService) { 
    // console.log(this.tokenService.token);
    // this.token = JSON.parse(localStorage.getItem('token'));
  }

  ngOnInit(){
  }

  onGetPhoto(){
    const options = {
      maxResults : 10
    }
    picasa.getPhotos(this.token, options,  (error, albums) => {
        console.log(error, albums)
    })
  }



}
