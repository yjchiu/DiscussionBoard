var usercontroller = require('../controllers/users.js');
var commentcontroller = require('../controllers/comments.js');
var topiccontroller = require('../controllers/topics.js');
var postcontroller = require('../controllers/posts.js');
var path = require('path');
module.exports = function(app) {
   // Routes
   // Root Request
    app.get('/users', usercontroller.index);
    app.post('/getuser', usercontroller.findOne);
    app.post('/newuser', usercontroller.new);

    app.get('/topics', topiccontroller.index);
    app.post('/gettopic', topiccontroller.findOne);
    app.post('/newtopic', topiccontroller.new);
    app.post('/addpost', function(req,res){
        topiccontroller.addpost(req,res);
        topiccontroller.incPostCount(req,res);
    });
    app.post('/allposts', topiccontroller.allposts);

    app.post('/newpost', postcontroller.new);
    
    app.post('/usertopics', topiccontroller.alltopicsforuser);
    app.post('/userposts', postcontroller.allpostsforuser);
    app.post('/usercomments', commentcontroller.allcommentsforuser);

    app.post('/voteup', postcontroller.voteup);
    app.post('/votedown', postcontroller.votedown);

    app.post('/newcomment', commentcontroller.new);
    app.post('/addcomment', postcontroller.addcomment);




    app.all('*', (req, res) => {
        res.sendFile(path.resolve('public/dist/index.html'));
    });
}