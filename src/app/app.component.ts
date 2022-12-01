import {ChangeDetectorRef ,Component,OnInit } from '@angular/core';
import { GoogleApiService } from './google-api.service';
//import { GoogleSigninService } from './google-signin.service';
//import {Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a-stange-story';

  //constructor(private readonly google: GoogleApiService){
  //}
  /*user!:gapi.auth2.GoogleUser|null

  constructor(private signInService:GoogleSigninService, private ref:ChangeDetectorRef){

  }

  ngOnInit(): void {
      this.signInService.observableGoogle().subscribe(user=>{
        this.user=user
      this.ref
    })
  }

  signIn(){
    this.signInService.signin()
  }

  signOut(){
    this.signInService.signOut()
  }*/
}
