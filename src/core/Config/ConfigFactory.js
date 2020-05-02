'use strict';

const Config = require('./Config');

class ConfigFactory {
  create() {
    return new Config();
  }
}

module.exports = ConfigFactory;
