'use strict';

// Tests
const { equal } = require('.');

// Mock data
const serverData = require('./mocks/serverData');

const { getServerHost, getServerPort } = require('../helpers');

equal(
  'Should check the application host',
  getServerHost(serverData),
  '127.0.0.1',
);

equal('Should check the application port', getServerPort(serverData), '3000');
