import { Component } from '@angular/core';
import { GoogleApiService } from '../google-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private readonly google: GoogleApiService){
  }
}
