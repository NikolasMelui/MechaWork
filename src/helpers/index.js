'use strict';

const getServerHost = (req) => req.headers.host.split(':')[0];
const getServerPort = (req) => req.headers.host.split(':').pop();

module.exports = { getServerHost, getServerPort };
