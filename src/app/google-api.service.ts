import { Injectable } from '@angular/core';
import { OAuthService,AuthConfig} from 'angular-oauth2-oidc'
import { User } from './models/user.model';
import { Subject } from 'rxjs';

const oAuthConfig:AuthConfig = {
  issuer:'https://accounts.google.com',
  strictDiscoveryDocumentValidation:false,
  redirectUri:window.location.origin,
  clientId:'183207456773-kngqpn79vprs7atq161l9tm3jsfblp7e.apps.googleusercontent.com',
  scope:'openid profile email'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

userProfileSubject$ = new Subject<User>

  constructor(private readonly oAuthService:OAuthService) { 
    oAuthService.configure(oAuthConfig);
    oAuthService.logoutUrl="http://localhost:4200/";
    oAuthService.loadDiscoveryDocument()
    .then(()=>{
      console.log('boom')
      oAuthService.tryLoginImplicitFlow().then(()=>{
        if(!oAuthService.hasValidAccessToken()){
          console.log('naruto')
          oAuthService.initLoginFlow()
        }else{
          console.log('sasuke')
          oAuthService.loadUserProfile().then((userProfile)=>{
            console.log(JSON.stringify(userProfile));
            this.userProfileSubject$.next(userProfile as User)
          })
        }
      })
    })
  }


  isLoggedIn(): boolean{
    if(this.oAuthService.hasValidAccessToken())
    {
      localStorage.setItem('aStrangeStoryStore',JSON.stringify(this.userProfileSubject$))
    }else{
      localStorage.removeItem('aStrangeStoryStore')
    }
    return this.oAuthService.hasValidAccessToken()
  }

  signOut():void{
    localStorage.removeItem('aStrangeStoryStore')
    this.oAuthService.logOut();


  }
}
