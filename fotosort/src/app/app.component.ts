import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import * as picasa from 'picasa';
import { PhotosService } from './photos.service';
import { UsernameService } from './username.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title:string ='fotosort';
  username:string = '';
  image:string = '';

  constructor(private photosService:PhotosService, private userService:UsernameService){
  }

  ngOnInit(){
    this.getUsername();
  }  

  getUsername(){
    this.userService.obtainUserName().subscribe((res)=>{
      console.log("This is from getUsername()"+ JSON.parse(JSON.stringify(res.json())).user );
     this.username= JSON.parse(JSON.stringify(res.json())).user ;
     this.image = res.json().image;
    },(err)=>{
       console.log('error occurs');
    })
  }
  

}