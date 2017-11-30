import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Image, Action, ImageModalEvent, Description } from 'angular-modal-gallery';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  photos:any;

  albums = [];

  filteredAlbums =[];

  imagesArray: Array<Image> = [];

  loading:boolean = false;
  
  havePhotos:boolean = false;
  
  haveAlbum:boolean = false;
  
  photoSelected:boolean = true;

  disabled:boolean = true;

  constructor(private http:Http) { }

  ngOnInit() {
    this.getAlbum();
  }

  getAlbum(){
    this.http.get('/albumDB')
    .subscribe(
      (response)=>{
        response.json().forEach((album)=>{
          console.log(album.url.split(','))
            var obj = {
              albumID:album.id,
              albumName: album.albumName,
              images: album.url.split(',')
            }
        this.albums.push(obj)
      })
    }, 
    (err)=>{
      console.log(err)
    })
  }



checkAlbum(albumID){
  let result = this.albums.filter(album=>(album.id ===albumID));
    if (albumID ===result[0].id ){
    //  this.filteredAlbums.push(albumID)
    return this.filteredAlbums.push(albumID)
   }else{
    //  this.filteredAlbums =[]
    this.filteredAlbums=[]
   }
}

  deleteAlbum(id){
    this.http.delete('/deletealbum/'+id)
    
    .subscribe(
       (response)=>{
         response.json().forEach((album)=>{
           console.log(id);
           console.log(album.url.split(','));
            let obj ={
              albumID:album.id,
              albumName:album.albumName,
              images:album.url.split(',')
              }
          })
          console.log(response),
         (error)=>{
          console.log(error)
          }
        }
      )
      this.albums = this.albums.filter((n)=>{
      return n.albumID !=id
      })
    
     console.log(this.albums)
    }
  }
