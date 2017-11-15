import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private photosService:PhotosService) { }

  ngOnInit() {
  }

  getPhoto(){
    this.photosService.onGetPhoto();
  }

}
