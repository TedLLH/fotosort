import { Component, OnInit, OnDestroy,Inject, Input, NgModule } from '@angular/core';
import { PhotosService } from '../photos.service';
import { FilterPipe } from '../filter.pipe'
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import * as _ from 'underscore';

import { Image, Action, ImageModalEvent, Description } from 'angular-modal-gallery';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  
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

  loading:boolean = false;

  havePhotos:boolean = false;

  haveAlbum:boolean = false;

  photoSelected:boolean = true;

  showMore:boolean = false;

  openModalWindow:boolean = false; 

  imagePointer: number = 0;

  openModalWindowObservable: boolean = false;
  
  imagePointerObservable: number = 0;

  imagesArray: Array<Image> = [];

  imagesAll: Array<Image> = [];

    // observable of an array of images with a delay to simulate a network request
    images: Observable<Array<Image>> = Observable.of(this.imagesArray).delay(300);
    
      // array with a single image inside (the first one)
      singleImage: Observable<Array<Image>> = Observable.of([
        new Image(
          '../assets/images/gallery/img1.jpg',
          '../assets/images/gallery/thumbs/img1.jpg',
          'Description 1',
          'http://www.google.com'
        )]
      );
    
      // array of images initialized inside the onNgInit() of this component
      // in an asynchronous way subscribing to an Observable with a delay.
      // This is not a real use-case, but it's a way to simulate a scenario where
      // you have to subscribe to an Observable to get data and to set public vars
      imagesArraySubscribed: Array<Image>;
    
      customDescription: Description = {
        imageText: 'Look this image ',
        numberSeparator: ' of ',
        beforeTextDescription: ' => '
      };
    
      customFullDescription: Description = {
        // you should build this value programmaticaly with the result of (show)="..()" event
        customFullDescription: 'Custom description of the current visible image',
        // if customFullDescription !== undefined, all other fields will be ignored
        // imageText: '',
        // numberSeparator: '',
        // beforeTextDescription: '',
      };
    
      private subscription: Subscription;
      private imagesArraySubscription: Subscription;


  createAlbumError = {
    "border-color" : "white"
  }

  constructor(private http:Http, private photosService:PhotosService) { }

  ngOnInit() {
   this.getAlbums();
   this.photolinks = this.photosService.getPhotos();
   this.photos = this.photolinks;
   if(this.photos.length>0){
     this.disabled = false;
   }
   if(this.photosService.gallery.length>0){
    this.photosService.gallery.forEach((g)=>{
      this.imagesArray.push(new Image(g.img, g.img, g.description, g.img))
      this.imagesAll.push(new Image(g.img, g.img, g.description, g.img))
    })
    console.log(this.imagesArray);
   }
   this.imagesArraySubscription = Observable.of(null).delay(500).subscribe(() => {
    this.imagesArraySubscribed = this.imagesArray;
  });
  }

  showMorePhotos(){
    if(this.showMore == false){
      this.showMore = true;
    } else {
      this.showMore = false;
    }
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
      this.haveAlbum = true;
      console.log(this.albums)
    }, (err)=>{
      console.log('get albums error')
    })
  }
  
  getPhoto(){
    //using /getphoto route
    console.log('getPhoto from Google clicked')
    this.loading = true;
    this.havePhotos = false;
    // this.photos = [{image: 'https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif'}]
    this.photosService.onGetPhoto(this.albumsConfirm).subscribe((res)=>{
      this.photolinks = res.json()['links']
      this.photos = this.photolinks;
      this.photosService.storePhotos(this.photolinks);
      this.photos.forEach((photo)=>{
        console.log("wait for latency");
        this.imagesArray.push(new Image(photo.image, photo.image, photo.tags, photo.image))
      })
      this.photosService.storeGallery(this.imagesArray);
      this.loading = false;
      this.disabled = false;
      this.havePhotos = true;
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
      this.albumName = '';
      this.photoURLyouwanttoadd = [];
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
    if(this.photoURLyouwanttoadd.length == 0){
      this.photoSelected = true;
    } else {
      this.photoSelected = false;
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
    this.imagesArray.length = 0;
    this.imagesAll.forEach((img)=>{
      if((_.intersection(img.description, this.searchConfirm)).length == this.searchConfirm.length){
        this.imagesArray.push(new Image(img.img, img.img, img.description, img.img))
      } 
    })
  }

  
  
  openImageModal(image: Image) {
    this.imagePointer = this.imagesArray.indexOf(image);
    this.openModalWindow = true;
  }

  openImageModalObservable(image: Image) {
    this.subscription = this.images.subscribe((val: Image[]) => {
      this.imagePointerObservable = val.indexOf(image);
      this.openModalWindowObservable = true;
    });
  }

  onImageLoaded(event: ImageModalEvent) {
    // angular-modal-gallery will emit this event if it will load successfully input images
    console.log('onImageLoaded action: ' + Action[event.action]);
    console.log('onImageLoaded result:' + event.result);
  }

  onVisibleIndex(event: ImageModalEvent) {
    this.customFullDescription.customFullDescription = `Custom description of visible image with index= ${event.result}`;
    console.log('action: ' + Action[event.action]);
    console.log('result:' + event.result);
    
    var index:any = event.result;
      this.photos.forEach((p)=>{
        if(p.image == this.imagesArray[index-1].img){
          let pop = this.photos.pop(p);
          this.photos.unshift(pop);
        }
      })
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




