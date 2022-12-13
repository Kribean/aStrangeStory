import { Component,OnInit } from '@angular/core';
import { Parcel } from '../models/parcel.model';
import {Observable,map} from 'rxjs'
import { ParcelService } from '../services/parcel.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-story-board-container',
  templateUrl: './story-board-container.component.html',
  styleUrls: ['./story-board-container.component.scss']
})
export class StoryBoardContainerComponent implements OnInit {
parcels!:Parcel[];
//parcels!:Parcel[];
parcelsLast!:Parcel;
showModal!:boolean;
stepInModal!:Number;
userInformation!:User;

constructor(private parcelService:ParcelService,private route:ActivatedRoute ){}
  ngOnInit(): void {
    const storedUser = localStorage.getItem('aStrangeStoryStore');
    if(typeof storedUser ==='string')
    {
      this.userInformation=JSON.parse(storedUser).info;
      console.log(this.userInformation,'pooj');
    }
    else{
      console.log('need to log');
    }
    this.stepInModal=0;
    this.parcelService.getAllParcels(this.route.snapshot.params['idStory']).subscribe(
      (data:Parcel[])=>{
        this.parcels=data;
        this.parcelsLast=data[data.length-1]
      }
    );
    /*this.parcels=[
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
    ];*/
    this.showModal = true;
  }

  
  toggleModal():void{
    this.showModal = !this.showModal;
    this.stepInModal=0;
    console.log('I m at step:',this.stepInModal);
  }
}
