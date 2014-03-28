var cosmos = require('../..');
var express = require('express');

var app = express();

app.use('users', require('./posts'));

app.listen(8080);