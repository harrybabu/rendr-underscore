var fs = require('fs');

module.exports = function(Underscore) {
  return {
    getLayout: function(name, entryPath, callback) {
      var layoutPath = entryPath + 'app/templates/' + name + '.html';
      fs.readFile(layoutPath, 'utf8', function (err, str) {
        if (err) return callback(err);
        var template = Underscore.compile(str);
        callback(null, template);
      });
    }
  }
};
