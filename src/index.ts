import {GjvDevExampleApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {GjvDevExampleApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new GjvDevExampleApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
