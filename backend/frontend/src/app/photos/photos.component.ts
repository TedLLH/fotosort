import { Component, OnInit, Inject, Input, NgModule } from '@angular/core';
import { PhotosService } from '../photos.service';
import { FilterPipe } from '../filter.pipe'
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import * as _ from 'underscore'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  
  @Input() photolinks 
  // photolinks = [{'image': 'http://icons.iconarchive.com/icons/martz90/circle/512/camera-icon.png'}, {'image':'http://icons.iconarchive.com/icons/pelfusion/long-shadow-media/512/Camera-icon.png'}, {'image': 'https://image.freepik.com/free-icon/whatsapp-logo_318-49685.jpg'}];
  photos:any;

  albums:any;

  albumsConfirm:any = []

  term:string = '';

  searchTerm:any[] = [];

  searchConfirm:any[] = [];

  photoURLyouwanttoadd:string[] = []

  albumName:string = '';

  disabled:boolean = true;

  haveAlbum:boolean = false;

  createAlbumError = {
    "border-color" : "white"
  }

  constructor(private http:Http, private photosService:PhotosService) { }

  ngOnInit() {
   
  }

  checkAlbum(id){
    if(this.albumsConfirm.includes(id)){
      this.albumsConfirm = this.albumsConfirm.filter((a)=>{return a != id})
    } else {
      this.albumsConfirm.push(id)
    }
    console.log(this.albumsConfirm)
  }

  getAlbums(){
    console.log('get aLbum clicked')
    this.photosService.onGetAlbum().subscribe((res)=>{
      this.albums = res.json()['album']
      this.albumsConfirm = this.albums.map((album)=>{return album.id})
      this.haveAlbum = true
      console.log(this.albums)
    }, (err)=>{
      console.log('get albums error')
    })
  }
  
  getPhoto(){
    //using /getphoto route
    console.log('getPhoto from Google clicked')
    this.photolinks = [{image: 'https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif'}]
    this.photosService.onGetPhoto(this.albumsConfirm).subscribe((res)=>{
      this.photolinks = res.json()['links']
      this.photos = this.photolinks
      this.disabled = false;
    }, (err)=>{
        console.log('get photo error occurs!')
    });
  }

  changeStyle(term){
    if(this.searchConfirm.includes(term)){
      this.searchConfirm = this.searchConfirm.filter((n)=>{return n != term})
      this.searchTerm.forEach((T)=>{
        if(T.term == term){
          T.myStyle = {
            background: 'lightpink'
          }
        }
      })
    } else {
    this.searchConfirm.push(term);
      this.searchTerm.forEach((T)=>{
        if(T.term == term){
          T.myStyle = {
            background: 'yellow'
          }
        }
      })
    }
    this.filterPhoto();
  }

  addTerm(){
    var obj:any = {
      term: this.term,
      myStyle: {
        background: 'yellow'
      }
    }
    if(!this.searchTerm.map((term)=>{return term.term}).includes(this.term)){
      this.searchTerm.push(obj);
      this.searchConfirm.push(this.term)
    }
    this.term = '';
    this.filterPhoto();
  }

  deleteTag(tag){
    this.searchTerm = this.searchTerm.filter((n)=>{
        return n.term != tag
    })
    this.searchConfirm = this.searchConfirm.filter((n)=>{
      return n != tag
    })
    console.log(this.searchConfirm)
    this.filterPhoto()
  }

  createAlbum(){
    console.log(this.albumName)
    if(this.albumName){
      this.createAlbumError = {
        "border-color": "white"
      }
      this.http.post('/createalbum', {albumName: this.albumName, url: this.photoURLyouwanttoadd}).subscribe((res)=>{}, (err)=>{})
    } else {
      this.createAlbumError = {
        "border-color": "red"
      }
    }
  }

  addLink(link){
    if(!this.photoURLyouwanttoadd.includes(link)){
      this.photoURLyouwanttoadd.push(link)
    } else {
      this.photoURLyouwanttoadd = this.photoURLyouwanttoadd.filter((n)=>{
        return n != link
      })
    }
    console.log(this.photoURLyouwanttoadd)
    this.filterPhoto();
  }

  filterPhoto(){
    this.photos = this.photolinks.filter(link=>{
      if((_.intersection(link.tags, this.searchConfirm)).length == this.searchConfirm.length){
        return link
      }
    })
    if(this.photos.length ==0){
      this.photos = {image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
    }
  }


}
