import { Injectable } from '@angular/core';
import { ReplaySubject, Subject,Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {

  //private auth2!:gapi.auth2.GoogleAuth;
  //private subject!:any
 

  constructor() { 
   /* this.subject=new ReplaySubject<gapi.auth2.GoogleUser>(1)
    gapi.load('auth2',()=>{
      this.auth2=gapi.auth2.init({
        client_id:'183207456773-kngqpn79vprs7atq161l9tm3jsfblp7e.apps.googleusercontent.com'
      })
    })
  }

  public signin(){
    this.auth2.signIn()
    .then(user=>{
      console.log('brunooo',user);
      this.subject.next(user);
    })
    .catch(()=>{
      console.log('ouuuu')
      this.subject.next(null)
    })
  }

  public signOut(){
    this.auth2.signOut()
    .then(()=>{
      this.subject.next(null)
    })

  }

  public observableGoogle():Observable<any>{
    return this.subject.asObservable();

  }*/
}
