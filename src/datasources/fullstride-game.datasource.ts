import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './fullstride-game.datasource.json';

export class FullstrideGameDataSource extends juggler.DataSource {
  static dataSourceName = 'FullstrideGame';

  constructor(
    @inject('datasources.config.FullstrideGame', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
