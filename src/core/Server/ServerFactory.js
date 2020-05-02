'use strict';

const Server = require('./Server');

class ServerFactory {
  create(serverConfig = {}) {
    return new Server(serverConfig);
  }
}

module.exports = ServerFactory;
