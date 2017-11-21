import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Http, HttpModule } from '@angular/http';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  photolinks: string[] = [];

  constructor(private photosService:PhotosService, private http:Http, private tokenService:TokenService) { }

  ngOnInit() {
    
  }


  getPhoto(){
    this.photosService.onGetPhoto().subscribe((res)=>{
      this.photolinks = [];
      res.json()['links'].forEach((album)=>{
        album.forEach((link)=>{
          this.photolinks.push(link)
        })
      })
    }, (err)=>{});
  }

}
