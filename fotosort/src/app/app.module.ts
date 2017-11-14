import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosService } from './photos.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDnwljBbcXSBNz_SgqTICaZ6B6Rg5PJr0g",
      authDomain: "noonewillnotice-2e8e6.firebaseapp.com",
      databaseURL: "https://noonewillnotice-2e8e6.firebaseio.com",
      projectId: "noonewillnotice-2e8e6",
      storageBucket: "noonewillnotice-2e8e6.appspot.com",
      messagingSenderId: "276231888981"
    }), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
