var _ = require("underscore");

/* convert json dict to array */
module.exports = function(dict) {
    return _.map(dict, function(value, key) {
    	value['key'] = key;
    	return value;
    });
};