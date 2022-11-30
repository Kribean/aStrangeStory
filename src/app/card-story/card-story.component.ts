import { Component,Input } from '@angular/core';
import { Story } from '../models/story.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-story',
  templateUrl: './card-story.component.html',
  styleUrls: ['./card-story.component.scss']
})
export class CardStoryComponent {
  @Input() story!:Story;

  constructor(private router:Router){}
  goToStory(id:number):void{
this.router.navigateByUrl(`story/${id}`)
  }


}
