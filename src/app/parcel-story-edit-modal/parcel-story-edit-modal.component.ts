import { Component,Input, OnInit,OnChanges, SimpleChanges} from '@angular/core';
import { Parcel } from '../models/parcel.model';
import {FormBuilder, FormGroup,Validators } from '@angular/forms';
import {Observable,map} from 'rxjs'


@Component({
  selector: 'app-parcel-story-edit-modal',
  templateUrl: './parcel-story-edit-modal.component.html',
  styleUrls: ['./parcel-story-edit-modal.component.scss']
})
export class ParcelStoryEditModalComponent implements OnChanges , OnInit {

  @Input() showModal!: boolean;
  @Input() toggleModal!: ()=>void;
  @Input() parcelStory!:Parcel
  contentStory!:string;

  parcelForm!:FormGroup;
  parcelStoryPreview$!:Observable<Parcel>;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.showModal=false;
    this.parcelForm = this.formBuilder.group({
      content: [null,[Validators.required]],
  }, {
    updateOn: 'blur'
})
  this.parcelStoryPreview$=this.parcelForm.valueChanges.pipe(
    map(parcelVar=>({
      ...parcelVar,
      id: 0,
      idStory:1,
      user:'Jhon Doe',
      idUser:0,
      createdDate: new Date(),
      like:false,
      numberOfLike:0
    }))
  )
  }
  ngOnChanges(changes: SimpleChanges) {
    this.showModal=true
  }

  onSubmitForm() {
    console.log(this.parcelForm.value);
}




}
