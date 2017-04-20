/**
 * module dependencies for routes configuration
 */
const path = require('path');
const express = require('express');

const userAPI = require('./entities/user/api');
const forumAPI = require('./entities/forum/api');
const discussionAPI = require('./entities/discussion/api');
const opinionAPI = require('./entities/opinion/api');
const adminAPI = require('./entities/admin/api');

/**
 * routes configurations
 */
const routesConfig = (app) => {
  // serves static files from public directory
  const publicPath = path.resolve(__dirname, '../public');
  app.use(express.static(publicPath));

  // serve api endpoint
  app.get('/api', (req, res) => {
    res.send('Hello from API endpoint');
  });

  // apply user apis
  userAPI(app);

  // apply forum apis
  forumAPI(app);

  // apply discussion apis
  discussionAPI(app);

  // apply opinion apis
  opinionAPI(app);

  // apply admin apis
  adminAPI(app);

  // all get request will send index.html for react-router
  // to handle the route request
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
  });
};

module.exports = routesConfig;
