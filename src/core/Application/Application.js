'use strict';

class Application {
  constructor() {
    this.config = {};
    this.database = {};
    this.server = {};
    this.api = {};
  }

  injectModules(config, database, server, api) {
    this.config = config;
    this.database = database;
    this.server = server;
    this.api = api;
  }

  start() {
    this.server.start();
  }
}

module.exports = Application;
