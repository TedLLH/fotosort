import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { Http, HttpModule} from '@angular/http';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'

const routes: Routes = [
    {path: '', component: SignupComponent },
    {path: 'login', component: LoginComponent}
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