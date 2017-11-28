import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { Http, HttpModule} from '@angular/http';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'

import { AuthGuard } from './authguard.service';

const routes: Routes = [
    {path: '', redirectTo:'/signup', pathMatch:'full'},
    {path: 'signup', component: SignupComponent },
    {path: 'login',  component: LoginComponent},
    {path: 'oauth2callback', redirectTo:'/login'}
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
export const routingComponents = [SignupComponent, LoginComponent]