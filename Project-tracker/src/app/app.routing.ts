import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { RequestresetComponent } from './requestreset/requestreset.component';
import { ResponseresetComponent } from './responsereset/responsereset.component';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'requestreset-password', component: RequestresetComponent },
    { path: 'responsereset-password/:token', component: ResponseresetComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);