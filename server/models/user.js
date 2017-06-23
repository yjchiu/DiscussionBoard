var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    name: String,
    topics : [{type: Schema.Types.ObjectId, ref: 'Topic'}],
    posts : [{type: Schema.Types.ObjectId, ref: 'Post'}],
    comments : [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})
var User = mongoose.model('User', UserSchema);