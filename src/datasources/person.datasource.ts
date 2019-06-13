import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './person.datasource.json';

export class PersonDataSource extends juggler.DataSource {
  static dataSourceName = 'person';

  constructor(
    @inject('datasources.config.person', {optional: true})
    dsConfig: object = {
      ...config,
      url: `mongodb+srv://${process.env.MONGODB__USER}:${process.env.MONGODB__PASSWORD}@${process.env.MONGODB__HOST}/${config.database}?retryWrites=true&w=majority`
    },
  ) {
    super(dsConfig);
  }
}
