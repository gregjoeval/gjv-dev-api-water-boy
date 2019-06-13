import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './team.datasource.json';

export class TeamDataSource extends juggler.DataSource {
  static dataSourceName = 'Team';

  constructor(
    @inject('datasources.config.Team', {optional: true})
    dsConfig: object = {
      ...config,
      url: `mongodb+srv://${process.env.MONGODB__USER}:${process.env.MONGODB__PASSWORD}@${process.env.MONGODB__HOST}/${config.database}?retryWrites=true&w=majority`
    },
  ) {
    super(dsConfig);
  }
}
