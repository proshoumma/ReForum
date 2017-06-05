/**
 * module dependencies for server configuration
 */
const path = require('path');
const databaseUrl = require('./credentials').DBURL;

/**
 * server configurations
 */
const serverConfigs = {
  PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT || 8080,
  ROOT: path.resolve(__dirname, '..'),
  DBURL: databaseUrl,
};

module.exports = serverConfigs;
