import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Http, HttpModule } from '@angular/http';
import { TokenService } from '../token.service';
import { UsernameService } from '../username.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  photolinks: string[] = [];
  username:any='';
  image:any

  constructor(private userService:UsernameService,private photosService:PhotosService, private http:Http, private tokenService:TokenService) { }

  ngOnInit() {
    this.getUsername();
  }

  clearPhoto(){
    this.http.get('/clearClarifai').subscribe((res)=>{
      console.log(res.json());
    }, (err)=>{})
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
