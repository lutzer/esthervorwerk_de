var _ = require("underscore");
var fs = require('fs');

module.exports = function(env, callback) {

	env.helpers.dump = function(obj) {
		console.dir(obj);
	};

	callback();

};