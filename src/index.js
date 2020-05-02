'use strict';
const ApplicationFactory = require('./core/Application/ApplicationFactory');
const DatabaseFactory = require('./core/Database/DatabaseFactory');
const ServerFactory = require('./core/Server/ServerFactory');
const ConfigFactory = require('./core/Config/ConfigFactory');
const ApiFactory = require('./core/Api/ApiFactory');

const bootstrap = async () => {
  const applicationFactory = new ApplicationFactory();
  const application = applicationFactory.create();

  const configFactory = new ConfigFactory();
  const config = configFactory.create();
  config.injectApplication(application);

  const databaseFactory = new DatabaseFactory();
  const database = databaseFactory.create(config.database);
  database.injectApplication(application);

  const serverFactory = new ServerFactory();
  const server = serverFactory.create(config.server);
  server.injectApplication(application);

  const apiFactory = new ApiFactory();
  const api = await apiFactory.create(application);

  application.injectModules(config, database, server, api);
  application.start();
};

bootstrap();
