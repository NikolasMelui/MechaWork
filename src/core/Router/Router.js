'use strict';

// TODO: Refactor and split

class Router {
  constructor(api = {}) {
    this.api = api;

    this.route = async (req, res) => {
      const { url, method } = req;

      if (url === '/favicon.ico') {
        res.writeHead(204);
        res.end();
        return;
      }

      if (url === '/') {
        res.writeHead(200);
        res.end('Standart');
        return;
      }

      const splittedUrl = url.split('/');
      const apiModuleName = splittedUrl[1];

      const route =
        url === `/${apiModuleName}` || url === `/${apiModuleName}/`
          ? '/'
          : splittedUrl.slice(2).join('/').replace(/\/$/, '');

      const controller = this.api.apiModules[apiModuleName].controller;
      const control = controller[`${method}__${route}`];

      if (control) {
        try {
          const handlerResult = await control.handler();

          const contentType =
            typeof handlerResult === 'string'
              ? 'text/plain'
              : 'application/json';

          const result =
            typeof handlerResult === 'string'
              ? handlerResult
              : JSON.stringify(handlerResult);

          res.writeHead(200, 'OK', { 'Content-Type': contentType });
          res.end(result);
        } catch (error) {
          console.error(error);
        }
      }

      res.writeHead(404);
      res.end();
    };
  }
}

module.exports = Router;
