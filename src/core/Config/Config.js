'use strict';

const dotenv = require('dotenv');
dotenv.config();

class Config {
  constructor() {
    this.database = {
      user: process.env.POSTGRES_USER || 'postgres_user',
      port: process.env.POSTGRES_PORT || 5432,
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      database: process.env.POSTGRES_DATABASE || 'postgres_database',
      password: process.env.POSTGRES_PASSWORD || 'password',
    };
    this.server = {
      host: process.env.SERVER_HOST || '127.0.0.1',
      port: process.env.SERVER_PORT || 3000,
    };
  }

  injectApplication(application = {}) {
    this.application = application;
  }

  database() {
    return this.database;
  }

  server() {
    return this.database;
  }
}

module.exports = Config;
