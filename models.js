var mongoose = require('mongoose');

var Post = mongoose.model('post', {date: String, title: String, body: String});

module.exports = {
    Post: Post
};
