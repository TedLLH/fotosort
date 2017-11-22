import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Http, HttpModule } from '@angular/http';
import { TokenService } from '../token.service';
// import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  photolinks: string[] = [];

  tags:string[] = []

  constructor(private photosService:PhotosService, private http:Http, private tokenService:TokenService) { }

  ngOnInit() {
    
  }

  clearPhoto(){
    this.http.get('/clearClarifai').subscribe((res)=>{
      console.log(res.json())
    }, (err)=>{})
  }

  getPhoto(){
    console.log('clciked')
    this.photosService.onGetPhoto().subscribe((res)=>{
      this.photolinks = [];
      this.photolinks = res.json()['links'];
    }, (err)=>{});
  }

}
