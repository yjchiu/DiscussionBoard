var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
module.exports = {
   index: function(req,res){
       Post.find({})
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in controller -find !!');
       })
   },
   new: function(req, res){
       console.log("post body: ", req.body);
       Post.create(req.body)
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in controller -create!!');
       })
   },
   allpostsforuser: function(req,res){
       Post.find({_user:req.body.id})
       .then(data=>{
           res.json(data);
       })
       .catch(err=>{
           console.log(err);
       })
   },
   addcomment: function(req,res){
    console.log("ADD COMMENT: ", req.body);
    Post.findOne({_id:req.body._post}, function(err, post){
        var comment = new Comment(req.body);
        comment.save(function(err){
            post.comments.push(comment);
            post.save(function(err){
                if(err){
                    console.log(err);
                }else{
                    res.json(true);
                }
            })
        })
    })
   },

   voteup: function(req,res){
       console.log("Vote Up: ", req.body);
       Post.findOneAndUpdate({_id:req.body.id}, {$inc:{votes_up:1}}, function(err,data){
            if(err) { console.log(err); }
            if(data) { res.json(data); }
       })
   },

   votedown: function(req,res){
       console.log("Vote Down: ", req.body);
       Post.findOneAndUpdate({_id:req.body.id}, {$inc:{votes_down:1}}, function(err,data){
            if(err) { console.log(err); }
            if(data) { res.json(data); }
       })
   }
    
}