'use strict';

const Application = require('./Application');

class ApplicationFactory {
  create() {
    return new Application();
  }
}

module.exports = ApplicationFactory;
