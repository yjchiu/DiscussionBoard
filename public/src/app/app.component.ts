import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Array<any> = [];
  constructor(private _http: HttpService) {
    this.getUsers();
    console.log("content:/// refreshed!!come here again ", this.users);
   }
  getUsers(){
    console.log("null users in parent: ", this.users);
    this._http.retrieveAll()
    .then(data=>{
      this.users = data.reverse();
    // console.log("content: ", this.users);
    })
    .catch(err=>{console.log(err);})
  }
}
