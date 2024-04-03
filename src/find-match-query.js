exports.findMatchQuery = function (input, query) {
    return query.map(q => input.filter(i => i === q).length)
}