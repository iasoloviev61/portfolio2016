var utils = require('./utils');
var Post = require('./models').Post;

module.exports = {
    '/save/': function(req, res) {
        // data - получен кусок данных
        // end - содержимое POST-запроса заполучено полностью

        console.log('пытаемся сохранить запись в блог');

        utils.readPost(req)
            .then(function(postBody) {
                console.log('получено тело запроса:', postBody);

                var post = new Post(postBody);

                post.save()
                    .then(function() {
                        res.write('OK');
                        res.end();
                    })
                    .catch(function(error) {
                        res.writeHead(500);
                        res.write(error.message);
                        res.end();
                    });
            })
            .catch(function() {
                res.writeHead(500);
                res.end();
            });
    },
    '/list/': function(req, res) {
        console.log('пытаемся получить список записей');

        Post.find()
            .then(function(posts) {
                console.log(posts);
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.write(JSON.stringify(posts));
                res.end();
            })
            .catch(function() {
                res.writeHead(500);
                res.end();
            });
    }
};
