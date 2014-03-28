var cosmos = require('../..');

var app = cosmos();

app.use(cosmos.static(__dirname))
app.use('posts', require('./posts'));

app.listen(8080);