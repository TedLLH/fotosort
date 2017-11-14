import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(){
    firebase.initializeApp({
            apiKey: process.env.APIKEY,
            authDomain: process.env.AUTHDOMAIN,
            databaseURL: process.env.DATABASEURL,
            projectId: process.env.PROJECTID,
            storageBucket: process.env.STORAGEBUCKET,
            messagingSenderId: process.env.MESSAGINGSENDERID
        });
  }

  ngOnInit(){

  }
}
