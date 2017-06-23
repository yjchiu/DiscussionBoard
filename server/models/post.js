var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
    name : String,
    content: String,
    votes_up:Number,
    votes_down:Number,
    comments:[{type: Schema.Types.ObjectId, ref: 'Comment'}],
    _user:{type: Schema.Types.ObjectId, ref:"User"},
    _topic:{type: Schema.Types.ObjectId, ref:"Topic"},
}, {timestamps: true})
var Post = mongoose.model('Post', PostSchema);