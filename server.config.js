// modules for server
var path = require('path');
var express = require('express');
var compress = require('compression');

// define node environment
var isProduction = process.env.NODE_ENV === 'production';

// define port number based on environment
var PORT = isProduction ? process.env.PORT || 3030
                        : process.env.PORT || 8080;

// initialize express
var app = express();

// express serves static files from public directory
var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// apply gzip compression
app.use(compress());

// development environment additionals
if (isProduction !== true) {
  var devServerConfig = require('./server.dev.config');
  devServerConfig(app);
}

// fire up the server
app.listen(PORT, function() {
  console.log('Server running on port: ' + PORT);
});
