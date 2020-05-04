'use strict';

const { Pool } = require('pg');

class Database {
  constructor(databaseConfig = {}) {
    this.databaseConfig = databaseConfig;
    this.pool = new Pool(this.databaseConfig);
  }

  query(sql, values = []) {
    return this.pool.query(sql, values);
  }

  close() {
    this.pool.end();
  }
}

module.exports = Database;
