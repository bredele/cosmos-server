var cosmos = require('../..');

var app = cosmos();

app.use('posts', require('./posts'));

app.listen(8080);