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

  constructor(private photosService:PhotosService, private http:Http, private tokenService:TokenService) { }

  ngOnInit() {
    
  }

  getPhoto(){
    this.photosService.onGetPhoto();
  }

}
