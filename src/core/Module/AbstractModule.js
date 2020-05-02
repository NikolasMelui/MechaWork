'use strict';

class AbstractModule {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    if (proto.constructor === AbstractModule)
      throw new Error('Abstract class should not be instanciated');
  }
  injectApplication(application = {}) {
    this.application = application;
  }
}

module.exports = AbstractModule;
