const AbstractModule = require('../../core/Module/AbstractModule');

const tasksController = require('./tasks.controller');
const tasksService = require('./tasks.service');

const prepareController = (controllers = []) => {
  const flattedController = controllers.flat();
  const controller = {};
  flattedController.forEach((control) => {
    controller[`${control.method}__${control.route}`] = control;
  });
  return controller;
};

class TasksModule extends AbstractModule {
  constructor() {
    super();
    this.controller = prepareController([tasksController]);
    this.service = [tasksService];
  }
}

module.exports = TasksModule;
