import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhotosService } from './photos.service';
import { TokenService } from './token.service';
import { AuthGuard } from './authguard.service'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { AppRoutingModule } from './app-routing.module';
import { PhotosComponent } from './photos/photos.component';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { OverlayModule } from '@angular/cdk/overlay'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
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
  providers: [PhotosService, TokenService, HttpModule, AuthGuard/*, OverlayModule, MatDialog*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
