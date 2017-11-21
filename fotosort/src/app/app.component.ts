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
  title = 'FotoNize';

  constructor(private photosService:PhotosService){
     firebase.initializeApp({
            apiKey: "AIzaSyDnwljBbcXSBNz_SgqTICaZ6B6Rg5PJr0g",
            authDomain: "noonewillnotice-2e8e6.firebaseapp.com",
            databaseURL: "https://noonewillnotice-2e8e6.firebaseio.com",
            projectId: "noonewillnotice-2e8e6",
            storageBucket: "noonewillnotice-2e8e6.appspot.com",
            messagingSenderId: "276231888981"
        });
  }

  ngOnInit(){
  }  

}