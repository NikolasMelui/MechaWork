'use strict';
const fs = require('fs').promises;
const path = require('path');

const Api = require('./Api');

class ApiFactory {
  async create(application = {}) {
    const modulesPath = path.resolve(__dirname, '../..', 'api');
    const moduleList = await fs.readdir(modulesPath);
    const modules = {};

    for (const moduleName of moduleList) {
      const modulePath = path.resolve(
        modulesPath,
        moduleName,
        `${moduleName}.module.js`,
      );
      const Module = require(modulePath);
      const currentModule = new Module();
      // currentModule.injectApplication(application);

      modules[moduleName] = currentModule;
    }
    return new Api(modules);
  }
}

module.exports = ApiFactory;
