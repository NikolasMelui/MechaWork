'use strict';

// Libraries
const http = require('http');

const RouterFactory = require('../Router/RouterFactory');

class Server {
  constructor(serverConfig = {}) {
    this.serverConfig = serverConfig;
  }

  injectApplication(application = {}) {
    this.application = application;
  }

  start() {
    const { host, port } = this.serverConfig;
    const { api } = this.application;
    const routerFactory = new RouterFactory();
    const router = routerFactory.create(api);
    const { route } = router;

    http
      .createServer(route)
      .listen(port, host, () =>
        console.log(`Server is listening on ${host}:${port}`),
      );
  }
}

module.exports = Server;
