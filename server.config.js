// modules for server
const path = require('path');
const express = require('express');
const compress = require('compression');

// define node environment
const isProduction = process.env.NODE_ENV === 'production';

// define port number based on environment
const PORT = isProduction ? process.env.PORT || 3030
                          : process.env.PORT || 8080;

// initialize express
const app = express();

// apply gzip compression
app.use(compress());

// apply development environment additionals
if (!isProduction) {
  const applyDevServerConfig = require('./server.dev.config');
  applyDevServerConfig(app);
}

// serves static files from public directory
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// serve api endpoint
app.get('/api', (req, res) => {
  res.send('Hello from API endpoint');
});

// all get request will send index.html for react-router
// to handle the route request
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// fire up the server
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log('Server running on port: ' + PORT);
});
