import { Injectable } from '@angular/core';
import * as picasa from 'picasa';
import { OnInit} from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { SignupComponent } from './signup/signup.component'
import { TokenService } from './token.service'

@Injectable()
export class PhotosService implements OnInit{

  photolinks:string[] = [];

  constructor(private http:Http, private tokenService:TokenService) { 
    // console.log(this.tokenService.token);
    // this.token = JSON.parse(localStorage.getItem('token'));
  }

  ngOnInit(){
  }

  onGetPhoto(){
    return this.http.get('/getphoto')
    // this.http.get('/getphoto').subscribe((res)=>{
    //   this.photolinks = [];
    //   res.json()['links'].forEach((album)=>{
    //     album.forEach((link)=>{
    //       this.photolinks.push(link)
    //     })
    //   })
    // }, (err)=>{})
  }



}
