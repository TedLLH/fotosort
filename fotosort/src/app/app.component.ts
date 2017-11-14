import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';
import * as picasa from 'picasa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FotoNize';

  constructor(){
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

  signUp(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth()
            .signInWithPopup(provider)
            .then(function(result) {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            console.log(result);
            }).catch((err)=>{
              console.log(err);
            });
  }

}
