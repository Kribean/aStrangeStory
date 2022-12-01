import { Injectable } from '@angular/core';
import { OAuthService,AuthConfig} from 'angular-oauth2-oidc'

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

  constructor(private readonly oAuthService:OAuthService) { 
    oAuthService.configure(oAuthConfig);
    oAuthService.loadDiscoveryDocument()
    .then(()=>{
      console.log('boom')
      oAuthService.tryLoginImplicitFlow().then(()=>{
        if(!oAuthService.hasValidAccessToken()){
          console.log('coucou')
          oAuthService.initLoginFlow()
        }else{
          console.log('coucou0')
          oAuthService.loadUserProfile().then((userProfile)=>{
            console.log(JSON.stringify(userProfile));
          })
        }
      })
    })
  }
}
