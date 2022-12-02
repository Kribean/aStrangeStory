import { Component, OnInit } from '@angular/core';
import { GoogleApiDisconnectService } from '../google-api-disconnect.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  boolSignInbtn!:boolean;
  boolBurgerClose!:boolean;

  constructor(private readonly google: GoogleApiDisconnectService){}

  signOutHeader(){
    this.google.signOut()
    console.log('Déconexion réalisé');
    this.boolSignInbtn=false;
    //this.boolTokenIsValid=this.google.isLoggedIn();
  }

  signInHeader(){
    
    this.google.signIn()
    console.log('Connexion réalisé');
    this.boolSignInbtn=true;
    //this.boolTokenIsValid=this.google.isLoggedIn();
  }
  
  ngOnInit(): void {
    this.boolSignInbtn=this.google.isLoggedIn();
    this.boolBurgerClose=true;
  }

  onChangeBoolBurger(){
    this.boolBurgerClose=!this.boolBurgerClose;
  }


}
