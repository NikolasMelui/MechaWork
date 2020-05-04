'use strict';
const fs = require('fs').promises;
const path = require('path');

const Api = require('./Api');

class ApiFactory {
  async create() {
    const apiModulesPath = path.resolve(__dirname, '../..', 'api');
    const apiModuleList = await fs.readdir(apiModulesPath);
    const apiModules = {};

    for (const apiModuleName of apiModuleList) {
      const apiModulePath = path.resolve(
        apiModulesPath,
        apiModuleName,
        `${apiModuleName}.module.js`,
      );
      const ApiModule = require(apiModulePath);
      const apiModule = new ApiModule();

      apiModules[apiModuleName] = apiModule;
    }
    return new Api(apiModules);
  }
}

module.exports = ApiFactory;
