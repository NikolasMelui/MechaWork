'use strict';

const Entity = require('./Entity');

class EntityFactory {
  create() {
    return new Entity();
  }
}

module.exports = EntityFactory;
