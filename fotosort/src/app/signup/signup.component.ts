import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router, Params, RouterModule, Routes } from "@angular/router";
import { TokenService } from '../token.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router, private tokenService:TokenService) { }

  ngOnInit() {
  }

  signUp(){
    this.tokenService.onSignUp();
  };

}
