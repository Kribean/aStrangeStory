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
        console.log('jesui 5');
        this.parcels=data;
        this.parcelsLast=data[data.length-1]
      }
    );
    this.showModal = false;
  }

  
  toggleModal():void{
    this.showModal = !this.showModal;
    this.stepInModal=0;
    console.log('I m at step:',this.stepInModal);
  }
  EverywhereUpdateListWhenPutEvent(tabParce:Parcel[]){
    console.log(tabParce,'yyyyyoooo');
    this.parcels=tabParce;
;  }
}
