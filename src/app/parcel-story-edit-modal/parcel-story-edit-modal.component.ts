import { Component,Input, OnInit,OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { Parcel } from '../models/parcel.model';
import {FormBuilder, FormGroup,Validators } from '@angular/forms';
import {Observable,map} from 'rxjs'
import { ActivatedRoute } from '@angular/router';
import { ParcelService } from '../services/parcel.service';
import { User } from '../models/user.model';
import { GoogleApiDisconnectService } from '../google-api-disconnect.service';


@Component({
  selector: 'app-parcel-story-edit-modal',
  templateUrl: './parcel-story-edit-modal.component.html',
  styleUrls: ['./parcel-story-edit-modal.component.scss']
})
export class ParcelStoryEditModalComponent implements OnChanges , OnInit {

  @Input() showModal!: boolean;
  @Input() toggleModal!: ()=>void;
  @Input() parcelStory!:Parcel;
  @Input() stepInModal!:Number;
  @Input() userInformation!:User;
  @Output() updateListWhenPutEvent :EventEmitter <Parcel[]>= new EventEmitter<Parcel[]>();
  contentStory!:string;

  parcelForm!:FormGroup;
  parcelStoryPreview$!:Observable<Parcel>;
  parcelStoryPreview!:Parcel;
  MsgOfCharacter!:string;
 

  constructor(private readonly google: GoogleApiDisconnectService,private formBuilder:FormBuilder,private route:ActivatedRoute,private parcelService:ParcelService){}

  ngOnInit(): void {
    this.showModal=false;
    this.parcelForm = this.formBuilder.group({
      content_parcel: [null,[Validators.required]],
  }, {
    updateOn: 'blur'
})
  
this.parcelStoryPreview$=this.parcelForm.valueChanges.pipe(
    map(parcelVar=>(
      {
      ...parcelVar,
      email : this.userInformation?.email,
      pseudo: this.userInformation?.name,
      user_img_url: this.userInformation?.picture
    }))

  )
  this.parcelStoryPreview$.subscribe((value)=>{
    this.parcelStoryPreview=value;})

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('douille');
   // this.showModal=true
  }

  onSubmitForm() {
    if(this.parcelStoryPreview.content_parcel.length>4)
    {
      this.MsgOfCharacter='';
      this.stepInModal=2;
    this.parcelService
    .postParcel(this.route.snapshot.params['idStory'],this.parcelStoryPreview)
    .subscribe(tabParcels=>{this.updateListWhenPutEvent.emit(tabParcels)})}
    else{
      this.MsgOfCharacter='Ton histoire est trop courte';
    }
}

ngOnDestroy(){
  this.stepInModal=0;
  console.log('I m at step:',this.stepInModal);
}



}
