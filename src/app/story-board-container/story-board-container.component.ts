import { Component,OnInit } from '@angular/core';
import { Parcel } from '../models/parcel.model';

@Component({
  selector: 'app-story-board-container',
  templateUrl: './story-board-container.component.html',
  styleUrls: ['./story-board-container.component.scss']
})
export class StoryBoardContainerComponent implements OnInit {
parcels!:Parcel[];
showModal!:boolean;
  ngOnInit(): void {
    this.parcels=[
      {
        id: 1,
        idStory:1,
        user:'ichi',
        idUser:'1',
        createdDate: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        like:true,
        numberOfLike:5
      },
      {
        id: 2,
        idStory:1,
        user:'ni',
        idUser:'2',
        createdDate: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        like:false,
        numberOfLike:4
      },      {
        id: 3,
        idStory:2,
        user:'san',
        idUser:'2',
        createdDate: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        like:false,
        numberOfLike:4
      },
    ];
    //this.showModal = false;
  }

  
  toggleModal():void{
    console.log('toioioi',this.showModal);
    this.showModal = !this.showModal;
    console.log('youyou',this.showModal)
  }
}
