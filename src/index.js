'use strict';
const ApplicationFactory = require('./core/Application/ApplicationFactory');
const DatabaseFactory = require('./core/Database/DatabaseFactory');
const ServerFactory = require('./core/Server/ServerFactory');
const ConfigFactory = require('./core/Config/ConfigFactory');
const ApiFactory = require('./core/Api/ApiFactory');

const bootstrap = async () => {
  const configFactory = new ConfigFactory();
  const config = configFactory.create();

  const databaseFactory = new DatabaseFactory();
  const database = databaseFactory.create(config.database);

  const apiFactory = new ApiFactory();
  const api = await apiFactory.create();
  api.inject(database);

  const serverFactory = new ServerFactory();
  const server = serverFactory.create(config.server);
  server.inject(api);

  const applicationFactory = new ApplicationFactory();
  const application = applicationFactory.create();

  application.inject(config, database, server, api);
  application.run();
};

bootstrap();
