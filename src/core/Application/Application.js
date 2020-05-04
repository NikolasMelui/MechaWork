'use strict';

class Application {
  constructor() {}

  inject(...modules) {
    for (const module of modules) {
      const moduleName = module.constructor.name.toLowerCase();
      this[moduleName] = module;
    }
  }

  run() {
    this.server.start();
  }
}

module.exports = Application;
