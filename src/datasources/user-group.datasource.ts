import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './user-group.datasource.json';

export class UserGroupDataSource extends juggler.DataSource {
  static dataSourceName = 'UserGroup';

  constructor(
    @inject('datasources.config.UserGroup', {optional: true})
    dsConfig: object = {
      ...config,
      url: `mongodb+srv://${process.env.MONGODB__USER}:${process.env.MONGODB__PASSWORD}@${process.env.MONGODB__HOST}/${config.database}?retryWrites=true&w=majority`
    },
  ) {
    super(dsConfig);
  }
}
