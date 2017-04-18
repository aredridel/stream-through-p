const through2 = require('through2');
module.exports = function throughp (fn) {
    return through2.obj(function (t, e, n) {
        return Promise.resolve(fn(t, e)).then(n => this.push(n), n)
    });
}
