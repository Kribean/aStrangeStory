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
export class GoogleApiDisconnectService {


  userProfileSubject$ = new Subject<User>

  constructor(private readonly oAuthService:OAuthService) { }

  signOut():void{
    
    this.oAuthService.configure(oAuthConfig);
    this.oAuthService.logoutUrl="http://localhost:4200/";
    this.oAuthService.loadDiscoveryDocument()
    .then(()=>{
      console.log('boom')
      this.oAuthService.tryLoginImplicitFlow().then(()=>{
        if(this.oAuthService.hasValidAccessToken()){
          console.log('on se déconnecte');
          this.oAuthService.logOut();
        }
      })
    })

  }

  signIn():void{
    this.oAuthService.configure(oAuthConfig);
    this.oAuthService.logoutUrl="http://localhost:4200/";
    this.oAuthService.loadDiscoveryDocument()
    .then(()=>{
      this.oAuthService.tryLoginImplicitFlow().then(()=>{
        if(!this.oAuthService.hasValidAccessToken()){
          console.log('On se loggue')
          this.oAuthService.initLoginFlow()
        }else{
          console.log('pas de token')
          this.oAuthService.loadUserProfile().then((userProfile)=>{
            console.log(JSON.stringify(userProfile));
            this.userProfileSubject$.next(userProfile as User)
          })
        }
      })
    })
  }

  isLoggedIn(): boolean{
    console.log('le valid token est:',this.oAuthService.hasValidAccessToken() );
    return this.oAuthService.hasValidAccessToken()
  }
}
