import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './location.datasource.json';

export class LocationDataSource extends juggler.DataSource {
  static dataSourceName = 'Location';

  constructor(
    @inject('datasources.config.Location', {optional: true})
    dsConfig: object = {
      ...config,
      url: `mongodb+srv://${process.env.MONGODB__USER}:${process.env.MONGODB__PASSWORD}@${process.env.MONGODB__HOST}/${config.database}?retryWrites=true&w=majority`
    },
  ) {
    super(dsConfig);
  }
}
