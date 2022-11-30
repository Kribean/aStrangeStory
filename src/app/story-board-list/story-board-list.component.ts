import { Component,OnInit } from '@angular/core';
import { Story } from '../models/story.model';

@Component({
  selector: 'app-story-board-list',
  templateUrl: './story-board-list.component.html',
  styleUrls: ['./story-board-list.component.scss']
})
export class StoryBoardListComponent implements OnInit {

  stories!:Story[];

  ngOnInit(){
    this.stories=[
      {
       id: 1,
        title: 'titre 1',
        imageUrl: '../assets/lantern.svg',
        imageAlt:'app logo',
        createdDate: new Date(),
        language: 'créole',
        content: 'bla bla bla',
        numberOfLike:0,
        numberOfDislike:0,
        numberOfUser:10
      },
      {
        id: 2,
         title: 'titre 1',
         imageUrl: '../assets/lantern.svg',
         imageAlt:'app logo',
         createdDate: new Date(),
         language: 'créole',
         content: 'bla bla bla',
         numberOfLike:0,
         numberOfDislike:0,
         numberOfUser:10
       }
    
    ]
  }

}
