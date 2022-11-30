import { Component,OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  imageSrc !:string;
  imageAlt!:string;
  changeStarConfig$!:Observable<string>;
constructor(private router:Router){}
ngOnInit(){
this.imageSrc='../assets/lantern.svg';
this.imageAlt='banniere';
/*this.changeStarConfig$=interval(2000).pipe(
  map(value=>(value%2===0?true:false)),
  map(boolVal => boolVal?"w-[10px] h-[10px] rounded bg-yellow-400 transition-all":"w-[100px] h-[100px] rounded bg-red-400 transition-all")
)*/

}

onGoToStoriesPage(){
this.router.navigateByUrl('stories')
}

}
