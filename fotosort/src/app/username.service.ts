import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import * as picasa from 'picasa';
import { OnInit} from '@angular/core';


@Injectable()
export class UsernameService {

  constructor(private http:Http) { }

  obtainUserName(){
    console.log(' username service working')
    return this.http.get('/username')
    
  }
}
