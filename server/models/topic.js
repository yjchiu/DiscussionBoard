var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TopicSchema = new mongoose.Schema({
 title: String,
 description:String,
 category:String,
 count:Number,
 username:String,
 _user:{type:Schema.Types.ObjectId, ref:"User"},
 posts:[{type: Schema.Types.ObjectId, ref:"Post"}],
}, {timestamps: true})
var Topic = mongoose.model('Topic', TopicSchema);