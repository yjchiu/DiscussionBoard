import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = {
    id:'',
  }
  name = '';
  topicCount = 0;
  postCount = 0;
  commentCount = 0;
  constructor(private _route:ActivatedRoute, private __httpService:HttpService, private _cookieService:CookieService, private _router:Router) { 
      if(!this._cookieService.get("loginuserName")){
      this._router.navigate(['/']);
      } 
      this._route.params.subscribe(param=>{
      this.user.id = param.id;
      this.__httpService.getTopicFromUser(this.user)
      .then(alltopics=>{
        console.log("all topics:" , alltopics);
        if(alltopics.length == 0){
          this.name = '';
        }else{
          this.name = alltopics[0].username;
        }
        this.topicCount = alltopics.length;
      })

      this.__httpService.getPostFromUser(this.user)
      .then(allposts=>{
        console.log("all topics:" , allposts);
        if(this.name==''){
          this.name = allposts[0].name;
        }
        this.postCount = allposts.length;
      })

      this.__httpService.getCommentFromUser(this.user)
      .then(allcomments=>{
        console.log("all comments", allcomments);
        if(this.name==''){
          this.name = allcomments[0].name;
        }
        this.commentCount = allcomments.length;
      })
      .catch();
    })
  }

  ngOnInit() {
  }

  logOut(){
    this._cookieService.remove("loginuserName");
    this._cookieService.remove("loginuserId");
    this._router.navigate(['/']);
  }
  
}
