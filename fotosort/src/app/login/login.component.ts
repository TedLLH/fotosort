import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Http, HttpModule } from '@angular/http';
import { TokenService } from '../token.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token:string;
  photolinks: string[] = [];

  constructor(private photosService:PhotosService, private http:Http, private tokenService:TokenService) { }

  ngOnInit() {
    
  }

  getPhoto(){
    this.token = localStorage.getItem('token');
    // console.log(this.token);
    // this.http.get('https://picasaweb.google.com/data/feed/api/user/userID', this.token).subscribe((res)=>{console.log(res)}, (err)=>{})
    // this.photosService.onGetPhoto();
    this.http.get('/getphoto').subscribe((res)=>{
      this.photolinks = res.json()['links']
    }, (err)=>{})
  }

}
