import { Component } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  templateUrl:'./home.component.html'
})
export class HomeComponent {
    constructor (authService:AuthService) {
        authService.login('username', 'password');
    }
 }