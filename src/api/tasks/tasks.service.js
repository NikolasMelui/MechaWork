'use strict';

const tasks = ['Task one', 'Task two', 'Task three', 'Task four', 'Task five'];

const sayHello = () => 'Hello';
const getTasksText = () => tasks.join(', ');
const getTasksJSON = () => tasks;

module.exports = { sayHello, getTasksText, getTasksJSON };
