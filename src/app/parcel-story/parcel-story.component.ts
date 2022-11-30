import { Component,OnInit,Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Parcel } from '../models/parcel.model';

@Component({
  selector: 'app-parcel-story',
  templateUrl: './parcel-story.component.html',
  styleUrls: ['./parcel-story.component.scss']
})
export class ParcelStoryComponent implements OnInit {

  boolHeart!:boolean;
  @Input() parcelStory!: Parcel;
  ngOnInit(): void {
      this.boolHeart=false;
  }
  faHeart = faHeart;


  onLike():void{
    this.boolHeart=!this.boolHeart
    //ici la requete PUT
  }

}
