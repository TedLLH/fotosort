import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router, Params, RouterModule, Routes } from "@angular/router";
import { TokenService } from '../token.service';
import { Http, HttpModule } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router, private tokenService:TokenService, private http:Http) {   }

  ngOnInit() {
  }

  signUp(){
    this.tokenService.onCheckToken().subscribe((res)=>{
      if(res.json()){
        this.router.navigateByUrl('/login')
      } else {
        this.tokenService.onSignUp();
      }
    }, (err)=>{
      console.log(err)  
    })
  };

}
