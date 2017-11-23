import { Component, OnInit, Inject, Input, NgModule } from '@angular/core';
import { PhotosService } from '../photos.service';
import { FilterPipe } from '../filter.pipe'
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms'; 
// import { FormControl,FormGroup, Validators } from '@angular/forms';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; 
// import { MatDialogModule } from '@angular/material/dialog';
// import { OverlayModule } from '@angular/cdk/overlay'



@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  
  @Input() photolinks
  // photolinks = [{'image': 'http://icons.iconarchive.com/icons/martz90/circle/512/camera-icon.png'}, {'image':'http://icons.iconarchive.com/icons/pelfusion/long-shadow-media/512/Camera-icon.png'}, {'image': 'https://image.freepik.com/free-icon/whatsapp-logo_318-49685.jpg'}];

  term:string = '';

  photoURLyouwanttoadd:string[] = []

  albumName:string = '';

  constructor(private http:Http, private photosService:PhotosService/*, public dialog: MatDialog*/) { }

  ngOnInit() {
   
  }

  onSearch(e){
    this.term = e.target.value;
  }

  createAlbum(){
    console.log(this.albumName)
    this.http.post('/createalbum', {albumName: this.albumName, url: this.photoURLyouwanttoadd}).subscribe((res)=>{}, (err)=>{})
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
  }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(PhotoDialog, {
  //     width: '250px',
  //     data: {}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }



}

// @Component({
//   selector: 'photo-dialog',
//   templateUrl: 'photo-dialog.html',
// })
// export class PhotoDialog {

//   constructor(
//     public dialogRef: MatDialogRef<PhotoDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }

