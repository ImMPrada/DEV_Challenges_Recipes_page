process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.REACT_APP_ACTIVE_STORAGE_PATH = process.env.NODE_ENV || '/rails/active_storage/direct_uploads';

const environment = require('./environment');

module.exports = environment.toWebpackConfig();
