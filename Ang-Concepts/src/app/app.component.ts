import { Component } from '@angular/core';
import {UsersDetailsService} from './users-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang-Concpets';
  detail !: any;

   constructor(private user : UsersDetailsService ){
  
    console.warn(this.user.getData());
    this.detail = this.user.getData();

   }


  onSubmit(data : any){
    console.warn(data);
  }
}
