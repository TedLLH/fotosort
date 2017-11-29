import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { Http, HttpModule} from '@angular/http';

import { PhotosComponent } from './photos/photos.component';
import { AlbumComponent } from './album/album.component'

import { AuthGuard } from './authguard.service';

const routes: Routes = [
    {path: '', redirectTo:'/', pathMatch:'full'},
    {path: 'photo', component: PhotosComponent },
    {path: 'album',  component: AlbumComponent},
    {path: '**', redirectTo:'/', pathMatch:'full'}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
export const routingComponents = [PhotosComponent, AlbumComponent]