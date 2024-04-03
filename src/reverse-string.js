exports.reverseString = function (str) {
    return str.replace(/([A-Za-z]+)/, c => c.split("").reverse().join(""))
}