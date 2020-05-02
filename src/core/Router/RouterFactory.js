'use strict';

const Router = require('./Router');

class RouterFactory {
  create(api = {}) {
    return new Router(api);
  }
}

module.exports = RouterFactory;
