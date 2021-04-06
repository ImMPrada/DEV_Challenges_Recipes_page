process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.DIRECT_UPLOADS_PATH = process.env.DIRECT_UPLOADS_PATH || '/rails/active_storage/direct_uploads';

const environment = require('./environment');

module.exports = environment.toWebpackConfig();
