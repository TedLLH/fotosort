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
  }

  getAlbum(){
    this.http.get('/album').subscribe((res)=>{
      res.json().forEach((album)=>{
        console.log(album.url.split(','))
        var obj = {
          albumName: album.albumName,
          images: album.url.split(',')
        }
        this.albums.push(obj)
      })
    }, (err)=>{})
  }

}
