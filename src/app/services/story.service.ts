import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable,map} from 'rxjs';
import { Story } from '../models/story.model';

@Injectable(
    {providedIn:'root'}
)

export class StoryService{
    constructor(private http: HttpClient) {} 
    
    ngOnInit(): void {}
    getAllStories(): Observable<Story[]> {
        return this.http.get<Story[]>('http://localhost:3000/story');
    }
}