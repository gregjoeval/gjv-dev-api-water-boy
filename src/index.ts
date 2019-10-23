import {GjvDevExampleApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import {OpenApiSpec} from '@loopback/rest';

export {GjvDevExampleApplication};

export async function main(options?: ApplicationConfig) {
  const app = new GjvDevExampleApplication(options);
  const spec: OpenApiSpec = {
    info: {
      title: 'WaterBoy Api',
      version: '1.0.0',
    },
    openapi: "3.0.0",
    tags: [],
    externalDocs: undefined,
    security: [],
    servers: [],
    paths: [],
    components: {
      schemas: {"BearerAuth": {}}
    },
  };
  app.setMetadata({
    name: 'gjv-dev-api-water-boy',
    version: '1.0.0',
    description: 'WaterBoy Api'
  });
  app.api(spec);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log('Server is running at...');
  console.log(`${url}`);

  return app;
}
