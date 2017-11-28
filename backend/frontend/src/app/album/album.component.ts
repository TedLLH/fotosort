import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums = []

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
