import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import * as picasa from 'picasa';
import { PhotosService } from './photos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string ='fotosort';

  constructor(private photosService:PhotosService){
  }

  ngOnInit(){
  }  
  

}