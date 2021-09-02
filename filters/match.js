/* match regular expression */
module.exports = function(str,regExp,at) {
    return str.match(regExp)[at];
};