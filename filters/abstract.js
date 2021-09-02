/* cuts string at <span class="more"></span> */
module.exports = function(str) {
    return str.split("<span class=\"more\"></span>")[0];
};