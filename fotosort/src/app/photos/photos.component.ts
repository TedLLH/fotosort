import { Component, OnInit, Inject, Input } from '@angular/core';
import { PhotosService } from '../photos.service';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { OverlayModule } from '@angular/cdk/overlay'


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  

  @Input() photolinks

  constructor(private photosService:PhotosService/*, public dialog: MatDialog*/) { }

  ngOnInit() {
   
  }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(PhotoDialog, {
  //     width: '250px',
  //     data: { link:'' }
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

