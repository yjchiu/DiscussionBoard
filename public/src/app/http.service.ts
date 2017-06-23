import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  // User
  retrieveAll() {
    return this._http.get('/users')
    .map( data => data.json() )
    .toPromise();
  }
  createUser(user){
    console.log("user:",user);
    return this._http.post("/newuser", user)
    .map(data => data.json())
    .toPromise();
  }

  getOneUser(user){
    console.log("getOne", user);
    return this._http.post('/getuser', user)
    .map(data=>data.json())
    .toPromise()
  }

  // Topic
  createTopic(topic){
    console.log("Topic:",topic);
    return this._http.post("/newtopic", topic)
    .map(data => data.json())
    .toPromise();
  }

  getAllTopics(){
    return this._http.get('/topics')
    .map(data=>data.json())
    .toPromise();
  }

  getOneTopic(topic_id){
    // console.log(topic_id);
    return this._http.post('/gettopic',topic_id)
    .map(data=>data.json())
    .toPromise();
  }

  TopicAddPost(post){
    return this._http.post('/addpost', post)
    .map(data=>{data.json();console.log("data", data)})
    .toPromise()
  }

  //Post

  createPost(post){
    return this._http.post('/newpost', post)
    .map(data=>data.json())
    .toPromise();
  }

  getAllPosts(topic){
    return this._http.post('/allposts', topic)
    .map(data=>data.json())
    .toPromise();
  }

  getTopicFromUser(user){
    console.log("get topic from user service: ", user)
    return this._http.post('/usertopics', user)
    .map(data=>data.json())
    .toPromise()
  }

  getPostFromUser(user){
    return this._http.post('/userposts', user)
    .map(data=>data.json())
    .toPromise()
  }

  getCommentFromUser(user){
    return this._http.post('/usercomments', user)
    .map(data=>data.json())
    .toPromise()
  }

  createComment(comment){
    console.log("service create comment", comment)
    return this._http.post('/newcomment', comment)
    .map(data=>data.json())
    .toPromise()
  }

  postAddComment(comment){
    return this._http.post('/addcomment', comment)
    .map(data=>data.json())
    .toPromise()
  }

  VoteUp(post){
    return this._http.post('/voteup', post)
    .map(data=>data.json())
    .toPromise()
  }

  VoteDown(post){
    return this._http.post('/votedown', post)
    .map(data=>data.json())
    .toPromise()
  }
  
}
