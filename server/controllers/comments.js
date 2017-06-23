var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
module.exports = {
   index: function(req,res){
       Comment.find({})
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in controller -find !!');
       })
   },
   new: function(req, res){
       console.log("body: ", req.body);
       Comment.create(req.body)
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in controller -create!!');
       })
   },
   allcommentsforuser: function(req,res){
       Comment.find({_user:req.body.id})
       .then(data=>{
           res.json(data);
       })
       .catch(err=>{
           console.log(err);
       })
   }

    
}