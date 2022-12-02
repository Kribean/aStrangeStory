import { Component,OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators';
import { Router } from '@angular/router';
//import { GoogleApiService } from '../google-api.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  imageSrc !:string;
  imageAlt!:string;
  changeStarConfig$!:Observable<string>;
  dummiesIds!:Array<100>;
  isLoggedBool!:boolean;

constructor(private router:Router){}

ngOnInit(){
  //this.isLoggedBool=this.google.isLoggedIn();
this.imageSrc='../assets/lantern.svg';
this.imageAlt='banniere';
this.dummiesIds=new Array(100);


/*this.changeStarConfig$=interval(2000).pipe(
  map(value=>(value%2===0?true:false)),
  map(boolVal => boolVal?"w-[10px] h-[10px] rounded bg-yellow-400 transition-all":"w-[100px] h-[100px] rounded bg-red-400 transition-all")
)*/

}

onGoToLoginPage(){
this.router.navigateByUrl('stories')
}

/*signOut(){
  this.google.signOut()
  this.isLoggedBool=this.google.isLoggedIn();
}*/

}
