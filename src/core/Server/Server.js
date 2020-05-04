'use strict';

// Libraries
const http = require('http');

const RouterFactory = require('../Router/RouterFactory');

class Server {
  constructor(serverConfig = {}) {
    this.serverConfig = serverConfig;
  }

  inject(...modules) {
    for (const module of modules) {
      const moduleName = module.constructor.name.toLowerCase();
      this[moduleName] = module;
    }
  }

  start() {
    const { host, port } = this.serverConfig;
    const routerFactory = new RouterFactory();
    const router = routerFactory.create(this.api);
    const { route } = router;

    http
      .createServer(route)
      .listen(port, host, () =>
        console.log(`Server is listening on ${host}:${port}`),
      );
  }
}

module.exports = Server;
