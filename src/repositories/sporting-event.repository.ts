import {DefaultCrudRepository} from '@loopback/repository';
import {SportingEvent} from '../models';
import {SportingEventDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SportingEventRepository extends DefaultCrudRepository<
  SportingEvent,
  typeof SportingEvent.prototype.id
> {
  constructor(
    @inject('datasources.SportingEvent') dataSource: SportingEventDataSource,
  ) {
    super(SportingEvent, dataSource);
  }
}
