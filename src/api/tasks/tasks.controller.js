const service = require('./tasks.service');

const controllerFactory = (method, route, handler) => ({
  method,
  route,
  handler,
});

const sayHello = controllerFactory('GET', '/', service.sayHello);
const getTasksText = controllerFactory('GET', 'text', service.getTasksText);
const getTasksJSON = controllerFactory('GET', 'json', service.getTasksJSON);

// const result = await application.database.query('SELECT NOW()');

module.exports = [sayHello, getTasksText, getTasksJSON];
