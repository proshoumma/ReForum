/**
 * module dependencies for server configuration
 */
const path = require('path');

/**
 * server configurations
 */
const serverConfigs = {
  PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT || 8080,
  ROOT: path.resolve(__dirname, '..'),

  // database url
  DBURL: 'mongodb://localhost:27017/ReForum',
};

module.exports = serverConfigs;
