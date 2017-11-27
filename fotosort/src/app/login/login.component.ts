import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Http, HttpModule } from '@angular/http';
import { TokenService } from '../token.service';
import { UsernameService } from '../username.service'

// import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  photolinks: string[] = [];
  username:any='';

  constructor(private userService:UsernameService,private photosService:PhotosService, private http:Http, private tokenService:TokenService) { }

  ngOnInit() {
    this.getUsername();
  }

  clearPhoto(){
    this.http.get('/clearClarifai').subscribe((res)=>{
      console.log(res.json());
    }, (err)=>{})
  }

  getPhoto(){
    //using /getphoto route
    console.log('getPhoto from Google clicked')
    this.photosService.onGetPhoto().subscribe((res)=>{
      this.photolinks = res.json()['links']
    }, (err)=>{
        console.log('get photo error occurs!')
    });
  }

  getUsername(){
    this.userService.obtainUserName().subscribe((res)=>{
      console.log("This is from getUsername()"+ JSON.parse(JSON.stringify(res.json())).user );
     return this.username= JSON.parse(JSON.stringify(res.json())).user 
    },(err)=>{
       console.log('error occurs');
    })
  
  }

  logOut(){
    this.http.get('/logout').subscribe((res)=>{},(err)=>{})
  }

}
