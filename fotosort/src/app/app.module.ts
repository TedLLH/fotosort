import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosService } from './photos.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
<<<<<<< HEAD

import dotenv from 'dotenv'
dotenv.config()
=======
>>>>>>> 434fd95d6484f6d2ddad2553db267b858797d368

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AngularFireModule.initializeApp({
      apiKey: process.env.APIKEY,
      authDomain: process.env.AUTHDOMAIN,
      databaseURL: process.env.DATABASEURL,
      projectId: process.env.PROJECTID,
      storageBucket: process.env.STORAGEBUCKET,
      messagingSenderId: process.env.MESSAGINGSENDERID
    }), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule
=======
>>>>>>> 434fd95d6484f6d2ddad2553db267b858797d368
  ],
  providers: [PhotosService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
