import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topic_id = {
    id:''
  };
  topic = {
    username:'',
  };
  post = {
    name:'',
    content:'',
    votes_up:0,
    votes_down:0,
    _user:'',
    _topic:'',
  }

  posts=[];

  clicked_post={
    id:'',
  }

  comment={
    name:'',
    content:'',
    _user:'',
    _post:'',
  }

  constructor(private _route:ActivatedRoute, private __httpService:HttpService, private _cookieService:CookieService, private _router:Router){
      if(!this._cookieService.get("loginuserName")){
      this._router.navigate(['/']);
    } 
      this._route.params.subscribe(param=>{
      this.topic_id.id = param.id;
      this.post.name = this._cookieService.get("loginuserName");
      this.post._user = this._cookieService.get("loginuserId");
      this.post._topic = param.id;
      this.comment.name = this._cookieService.get("loginuserName");
      this.comment._user = this._cookieService.get("loginuserId");
      this.comment._post = param.id;
    })
    this.__httpService.getOneTopic(this.topic_id)
      .then(updatedtopic=>{
      // console.log("TOPIC COMPONENT", updatedtopic);
      this.topic = updatedtopic;
      this.__httpService.getAllPosts(this.topic)
      .then(returntopic =>{
        // console.log("Return all posts: ", returntopic);
        this.posts = returntopic.posts;
        console.log(this.posts);
      })
    })

   }

  ngOnInit() {
  }
  createNewPost(form){
    if(!form.valid){return;}
    console.log(this.post);
    this.__httpService.createPost(this.post)
    .then(post=>{
      // console.log("created post: ", post);
      this.__httpService.TopicAddPost(post)
      .then(obj=>{
        console.log("obj", obj);
        this.__httpService.getAllPosts(this.topic)
        .then(returntopic =>{
          // console.log("Return all posts: ", returntopic);
          this.posts = returntopic.posts;
        })
      })
      post = {
        name:'',
        content:'',
        votes_up:0,
        votes_down:0,
        _user:'',
        _topic:'',
      }  
      form.resetForm();
  })
  .catch(err=>{
    console.log("EERROORR", err);
  });
}


createNewComment(value, post_id, error){
  console.log(error);
  this.comment.content = value;
  this.comment._post = post_id;
  console.log(this.comment);
  this.__httpService.createComment(this.comment)
  .then(commentcreated=>{
    console.log("comment created: ", commentcreated);
    this.__httpService.postAddComment(commentcreated)
    .then(obj=>{
      // console.log("obj: ", obj);
      console.log("TOPIC", this.topic);
      this.__httpService.getAllPosts(this.topic)
      .then(returntopic =>{
          console.log("Create New Comment Return all posts: ", returntopic);
          this.posts = returntopic.posts;
        })
    })
    .catch()
  })
  .catch(err=>{
    console.log("Create Comment Error: ", err);
  })
}

voteUP(post_id){
  console.log("Pass id plz: ", post_id);
  this.clicked_post.id = post_id;
  this.__httpService.VoteUp(this.clicked_post)
  .then(updatedpost=>{
    console.log("vote_up updatedpost: ", updatedpost);
    this.__httpService.getAllPosts(this.topic)
      .then(returntopic =>{
          console.log("Create New Comment Return all posts: ", returntopic);
          this.posts = returntopic.posts;
      })
  })
  .catch();
}

voteDOWN(post_id){
    this.clicked_post.id = post_id;
    this.__httpService.VoteDown(this.clicked_post)
      .then(updatedpost=>{
      console.log("vote_down updatedpost: ", updatedpost);
      this.__httpService.getAllPosts(this.topic)
        .then(returntopic =>{
            console.log("Create New Comment Return all posts: ", returntopic);
            this.posts = returntopic.posts;
        })
      })
      .catch();
}

logOut(){
    this._cookieService.remove("loginuserName");
    this._cookieService.remove("loginuserId");
    this._router.navigate(['/']);
  }




}
