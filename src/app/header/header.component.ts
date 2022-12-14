import { Component, OnInit } from '@angular/core';
import { GoogleApiDisconnectService } from '../google-api-disconnect.service';
import { faContactBook } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  boolSignInbtn!:boolean;
  boolBurgerClose!:boolean;

  faContactBook=faContactBook;

  constructor(private readonly google: GoogleApiDisconnectService, private router:Router){}

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

  goToHomepage(){
    this.router.navigateByUrl('/')
  }


}
