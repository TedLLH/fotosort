import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { PhotosService } from './photos.service';
import { TokenService } from './token.service';
import { UsernameService } from'./username.service';
import { AuthGuard } from './authguard.service'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { AppRoutingModule } from './app-routing.module';
import { PhotosComponent } from './photos/photos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './filter.pipe';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MembersComponent,
    PhotosComponent,
    FilterPipe,
    AlbumComponent
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
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [PhotosService, TokenService, UsernameService,HttpModule, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
