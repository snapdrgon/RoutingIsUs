import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MessagesService } from './messages/messages.service'; 
import { MessagesComponent } from './messages/messages.component'; 
import { PhotosComponent } from './photos/photos.component';
import { PhotoDetailsComponent } from './photos/photo-details.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import {routing} from './app.routing';
import {photosRouting} from './photos/photos.routing';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {PreventUnsaveChangesGuard} from  './prevent-unsaved-changes.service';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    PhotosComponent,
    PhotoDetailsComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    photosRouting,
    routing

  ],
  providers: [MessagesService, AuthService, AuthGuard, PreventUnsaveChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
