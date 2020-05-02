'use strict';

class Api {
  constructor(modules) {
    this.modules = modules;
  }
  injectApplication(application = {}) {
    this.application = application;
  }
}

module.exports = Api;
