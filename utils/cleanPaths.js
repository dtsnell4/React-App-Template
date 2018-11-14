var path = require('path');
var rootPath = path.resolve(__dirname + "/..");
var replace = require('replace-in-file');
var namespace = "Nsu.Web.EventCalendar";
var result = namespace.split(".").pop();

var options = {
  files: [
      rootPath + "/" +'package.json',
      rootPath + "/" +'app.js'
    ],
  from: namespace,
  to: result,
};

try {
    var changes = replace.sync(options);
    console.log('Modified files:', changes.join(', '));
  }
  catch (error) {
    console.error('Error occurred:', error);
  }