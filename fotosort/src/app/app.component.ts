import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(){
    firebase.initializeApp({
            apiKey: environment.APIKEY,
            authDomain: environment.AUTHDOMAIN,
            databaseURL: environment.DATABASEURL,
            projectId: environment.PROJECTID,
            storageBucket: environment.STORAGEBUCKET,
            messagingSenderId: environment.MESSAGINGSENDERID
        });
  }

  ngOnInit(){

  }
}
