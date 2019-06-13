import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './sporting-event.datasource.json';

export class SportingEventDataSource extends juggler.DataSource {
  static dataSourceName = 'SportingEvent';

  constructor(
    @inject('datasources.config.SportingEvent', {optional: true})
    dsConfig: object = {
      ...config,
      url: `mongodb+srv://${process.env.MONGODB__USER}:${process.env.MONGODB__PASSWORD}@${process.env.MONGODB__HOST}/${config.database}?retryWrites=true&w=majority`
    },
  ) {
    super(dsConfig);
  }
}
