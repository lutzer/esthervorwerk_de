var _ = require("underscore");

/* sorts a contentTree array by metadata.field within file. */
module.exports = function(array,file,field) {
    return _.sortBy(array,function(element) {
    	return element[file].metadata[field];
    });
};