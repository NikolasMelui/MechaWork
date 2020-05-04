'use strict';

class Api {
  constructor(apiModules) {
    this.apiModules = apiModules;
  }

  inject(...modules) {
    for (const module of modules) {
      const moduleName = module.constructor.name.toLowerCase();
      this[moduleName] = module;
    }
  }
}

module.exports = Api;
