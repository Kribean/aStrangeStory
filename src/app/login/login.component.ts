import { Component } from '@angular/core';
import { GoogleApiService } from '../google-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  isLoggedBool!:boolean;
  constructor(private readonly google: GoogleApiService,private router:Router){
    this.isLoggedBool=this.google.isLoggedIn();
  }

  signOut(){
    this.google.signOut()
  }

  goToStories(){
this.router.navigateByUrl('stories')
  }
}
