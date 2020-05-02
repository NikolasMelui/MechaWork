'use strict';

const Database = require('./Database');

class DatabaseFactory {
  create(databaseConfig = {}) {
    return new Database(databaseConfig);
  }
}

module.exports = DatabaseFactory;
