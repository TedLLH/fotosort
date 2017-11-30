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

  constructor(private http:Http) { 
    this.imagesAll.forEach((all)=>{
      this.imagesArraySubscription = Observable.of(null).delay(500).subscribe(() => {
        this.imagesArraySubscribed = all;
      });
    })
    // this.imagesArraySubscription = Observable.of(null).delay(500).subscribe(() => {
    //   this.imagesArraySubscribed = this.imagesArray;
    // });
  }

  ngOnInit() {
    this.getAlbum();
  }

    openModalWindow:boolean = false; 
  
    imagePointer: number = 0;
  
    openModalWindowObservable: boolean = false;
    
    imagePointerObservable: number = 0;
  
    imagesAll:any = [];

    private subscription: Subscription;
    private imagesArraySubscription: Subscription;
  
      // observable of an array of images with a delay to simulate a network request
        imagesArraySubscribed: Array<Image>;
      
        customDescription: Description = {
          imageText: 'Look this image ',
          numberSeparator: ' of ',
          beforeTextDescription: ' => '
        };
      
        customFullDescription: Description = {
          customFullDescription: 'Custom description of the current visible image',
        };

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
    if(this.filteredAlbums.includes(albumID)){
      let result = this.albums.filter(album=>{
                      return album.id == albumID})
                      .map((album)=>{
                      return album.id
                    });
                    console.log(result);
                    this.filteredAlbums = result;
    }else{
      this.filteredAlbums.push(albumID)
    }
  }

  getPhotoFromFotosort(){
    while(this.imagesAll.length>0){
      this.imagesAll.pop()
    }
    this.filteredAlbums.forEach((filteredAlbum)=>{
      this.albums.forEach((album)=>{
        if(album.albumID == filteredAlbum){
          let newArray = album.images.map(image=>{
            return new Image(image,image,null,image)
          })
          let newInstance = Observable.of(newArray).delay(300)
          this.imagesAll.push({title: album.albumName, image: newInstance})
           }
        })
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

  openImageModal(image: Image) {
      this.imagePointer = this.imagesArray.indexOf(image);
      this.openModalWindow = true;
    }
  
  openImageModalObservable(image: Image) {
      this.imagesAll.forEach((all)=>{
        this.subscription = all.subscribe((val: Image[]) => {
          this.imagePointerObservable = val.indexOf(image);
          this.openModalWindowObservable = true;
        });
      })
    }
  
    onImageLoaded(event: ImageModalEvent) {
      console.log('onImageLoaded action: ' + Action[event.action]);
      console.log('onImageLoaded result:' + event.result);
    }
  
    onVisibleIndex(event: ImageModalEvent) {
      this.customFullDescription.customFullDescription = `Custom description of visible image with index= ${event.result}`;
      console.log('action: ' + Action[event.action]);
      console.log('result:' + event.result);
    }
  
    onIsFirstImage(event: ImageModalEvent) {
      console.log('onfirst action: ' + Action[event.action]);
      console.log('onfirst result:' + event.result);
    }
  
    onIsLastImage(event: ImageModalEvent) {
      console.log('onlast action: ' + Action[event.action]);
      console.log('onlast result:' + event.result);
    }
  
    onCloseImageModal(event: ImageModalEvent) {
      console.log('onClose action: ' + Action[event.action]);
      console.log('onClose result:' + event.result);
      this.openModalWindow = false;
      this.openModalWindowObservable = false;
    }
  
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      if(this.imagesArraySubscription) {
        this.imagesArraySubscription.unsubscribe();
      }
    }
  

  }

  
