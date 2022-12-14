import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable,map} from 'rxjs';
import { Parcel } from '../models/parcel.model';

@Injectable(
    {providedIn:'root'}
)

export class ParcelService{
    constructor(private http: HttpClient) {} 
    
    ngOnInit(): void {}
    getAllParcels(arg:string): Observable<Parcel[]> {
        return this.http.get<Parcel[]>(`http://localhost:3000/parcel/${arg}`);
    }

    postParcel(arg:string,newParcel:Parcel):Observable<Parcel[]>{

        return this.http.post<Parcel[]>(
            `http://localhost:3000/parcel/${arg}`,
            newParcel
        )
    }

    likeParcel(arg:string,pictureTab:{picture:string,idStory:string}):Observable<Parcel[]>{
        return this.http.put<Parcel[]>(
            `http://localhost:3000/parcel/${arg}`,
            pictureTab
        )
    }
}