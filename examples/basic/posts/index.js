var cosmos = require('../../..');

var app = module.exports = cosmos();

app.on('mount', function() {
	console.log(arguments);
});

app.use(function() {
	console.log('child');
});
app.get('/test', function() {
	console.log('test');
});

