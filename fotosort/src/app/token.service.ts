import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
// import { PhotosService } from './photos.service'
import { SignupComponent } from './signup/signup.component'

@Injectable()
export class TokenService {

  token:string[];

  constructor(/*private photosService:PhotosService*/) { }

  onSignUp(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth()
            .signInWithPopup(provider)
            .then(function(result) {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            localStorage.setItem('token', JSON.stringify(token));
            // The signed-in user info.
            var user = result.user;
            // This checks the token
            // console.log(token)
            // console.log(this.photosService.token);
            }).catch((err)=>{
              console.log(err);
            });
  }

}
