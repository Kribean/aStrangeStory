import { Component,OnInit,Input, Output, EventEmitter } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Parcel } from '../models/parcel.model';
import { ParcelService } from '../services/parcel.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-parcel-story',
  templateUrl: './parcel-story.component.html',
  styleUrls: ['./parcel-story.component.scss']
})
export class ParcelStoryComponent implements OnInit {

  constructor(private parcelService:ParcelService,private route:ActivatedRoute){}
  
  boolHeart!:boolean;
  @Input() parcelStory!: Parcel;
  @Input() parcels!:Parcel[]
  @Output() updateListWhenPutEvent :EventEmitter <Parcel[]>= new EventEmitter<Parcel[]>();
  ngOnInit(): void {
    const localStore = localStorage.getItem('aStrangeStoryStore')
    if(localStore)
      {

        (this.parcelStory.likes_parcel.find((element)=>element===JSON.parse(localStore).info.picture))?this.boolHeart=true:this.boolHeart=false;
      }
      else
      {this.boolHeart=false;}
  }
  faHeart = faHeart;


  onLike(idParcel:string):void{
    this.boolHeart=!this.boolHeart
    //ici la requete PUT
    const localStore = localStorage.getItem('aStrangeStoryStore')
    if(localStore){
      
      this.parcelService.likeParcel(idParcel,{picture:JSON.parse(localStore).info.picture,idStory:this.route.snapshot.params['idStory']})
      .subscribe(tabParcels=>{this.updateListWhenPutEvent.emit(tabParcels); this.parcels=tabParcels})
    }else{
      console.log('connecte toi')
    }
  }

}
