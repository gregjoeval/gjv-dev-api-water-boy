import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';

export class FullstrideGameDataSource extends juggler.DataSource {
  static dataSourceName = 'FullstrideGame';

  constructor(
    @inject('datasources.config.FullstrideGame', {optional: true})
    dsConfig: object = {
      name: process.env.MONGODB__FULLSTRIDE_GAME__NAME,
      connector: 'mongodb',
      database: process.env.MONGODB__FULLSTRIDE_GAME__DATABASE,
      useNewUrlParser: true,
      url: process.env.MONGODB__FULLSTRIDE_GAME__URL,
      host: process.env.MONGODB__FULLSTRIDE_GAME__HOST,
      port: process.env.MONGODB__FULLSTRIDE_GAME__PORT,
      user: process.env.MONGODB__FULLSTRIDE_GAME__USER,
      password: process.env.MONGODB__FULLSTRIDE_GAME__PASSWORD,
    },
  ) {
    super(dsConfig);
  }
}
