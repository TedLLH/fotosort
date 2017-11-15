import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
// import { PhotosService } from './photos.service'
import { SignupComponent } from './signup/signup.component'
import { Http, HttpModule } from '@angular/http';
import { ActivatedRoute, Router, Params, RouterModule, Routes } from "@angular/router";

@Injectable()
export class TokenService {

  token:string;

  constructor(/*private photosService:PhotosService,*/ private http:Http, private router:Router) { }

  onSignUp(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth()
            .signInWithPopup(provider)
            .then(function(result) {
            // This gives you a Google Access Token.
            var token = result.credential.accessToken;
            localStorage.clear();
            localStorage.setItem('token', JSON.stringify(token));
            // The signed-in user info.
            var user = result.user;
            // This checks the token
            // console.log(token)
            // console.log(this.photosService.token);
            // }).then(()=>{
            //     this.token = (localStorage.getItem('token'));
            //     // console.log(this.token);
            //     this.http.post('/user/login', JSON.parse(this.token)).subscribe((res)=>{
            //       console.log(this.token);
            //       // console.log(res.json())
            //     },(err)=>{
            //           alert("You are not logged in. Dude!");
            //     });
            }).then(()=>{
                this.router.navigateByUrl('/login');
            }).catch((err)=>{
              console.log(err);
              this.router.navigateByUrl('');
            });
  }

}
