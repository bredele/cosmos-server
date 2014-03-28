var cosmos = require('..');
var assert = require('assert');

describe("API", function() {
	var app;
	beforeEach(function() {
		app = cosmos();
	});
	
	it("should be an express server", function() {
		assert(app.use);
		assert(app.set);
		assert(app.get);
		assert(app.listen);
		assert(app.configure);
	});

	it("should be a featherjs server", function() {
		assert(app.service);		
	});
	
	
});

describe("Use", function() {
	
});

