var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');
module.exports = {
   index: function(req,res){
       Topic.find({})
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in controller -find !!');
       })
   },
   new: function(req, res){
       console.log("topic body: ", req.body);
       Topic.create(req.body)
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in toipc controller -create!!');
       })
   },
   findOne: function(req,res){
       console.log("TOPIC FIND ONE", req.body);
       Topic.findOne({_id:req.body.id})
       .then(data=>{
           console.log(data);
           res.json(data);
       })
       .catch(err=>{
           console.log("Topic Find One Error: ", err);
       })
   },
   addpost: function(req,res){
    //    console.log(req.body);
       Topic.findOne({_id:req.body._topic}, function(err,topic){
           var post = new Post(req.body);
           post.save(function(err){
               topic.posts.push(post);
               topic.save(function(err){
                    if(err) { console.log(err) }
                    else {
                        res.json(true)
                    }
               })
           })
       })
   },
   allposts: function(req, res){
    // console.log("ALL POSTS: ", req.body);
    Topic.findOne({_id:req.body._id})
    .populate({
        path: 'posts',
        populate :{
            path: 'comments',
        }
    })
    .exec(function(err,posts){
        console.log("ALL POSTS", posts);
        res.json(posts);
    })
   },
   incPostCount: function(req,res){
        Topic.update({_id:req.body._topic}, {$inc:{count:1}}, function(err, data){
            if(err) { console.log(err); }
            if(data) { console.log('incremented'); }
        })
   },
   alltopicsforuser:function(req,res){
       console.log("Aaorn: ", req.body);
       Topic.find({_user:req.body.id})
       .then(data=>{
           console.log("DATA:", data);
           res.json(data);
       })
   }
    
}