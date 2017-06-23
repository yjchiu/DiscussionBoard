import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name = '';
  user_id = '';

  topic={
    title:'',
    description:'',
    category:'',
    count:0,
    _user:'',
    username:'',
  }
  topics=[];
  constructor(private _httpService:HttpService, private _cookieService:CookieService, private _route:Router){
    if(!this._cookieService.get("loginuserName")){
      this._route.navigate(['/']);
    } 
    this.name = this._cookieService.get("loginuserName");
    this.user_id = this._cookieService.get("loginuserId");
    this.topic._user = this.user_id; 
    this.topic.username = this.name;
    console.log(this.user_id); 
    this._httpService.getAllTopics()
    .then(alltopics=>{
      console.log("all topics: ", alltopics);
      this.topics = alltopics;
    })
  }

  ngOnInit() {
  }

  createNewTopic(form){
    if(!form.valid){
      return;
    }
    console.log("topic", this.topic);
    this._httpService.createTopic(this.topic)
    .then(topic=>{
      console.log(topic);
      this._httpService.getAllTopics()
      .then(alltopics=>{
        console.log("all topics: ", alltopics);
        this.topics = alltopics;
      })
      .catch(err=>{
        console.log(err);
      })
      topic={
        title:'',
        description:'',
        category:'',
        count:0,
        _user:'',
        username:'',
      }
      form.resetForm();
    })
    .catch(err=>{
      console.log(err);
    })

  }

  logOut(){
    this._cookieService.remove("loginuserName");
    this._cookieService.remove("loginuserId");
    this._route.navigate(['/']);
  }

}
