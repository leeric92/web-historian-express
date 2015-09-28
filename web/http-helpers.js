var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var statusCode = 200;

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, statusCode) {
	statusCode = statusCode || 200;
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
	fs.readFile(asset, function(err, content){
	  	res.writeHead(statusCode, this.headers);
	  	res.end(content, 'utf-8');
	});
};

// exports.sendResponse = function(res, data, statusCode){
// 	res.writeHead(statusCode, this.headers);
// 	res.end(data, 'utf-8');
// };


// As you progress, keep thinking about what helper functions you can put here!