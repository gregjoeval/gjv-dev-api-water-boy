import {DefaultCrudRepository} from '@loopback/repository';
import {Team} from '../models';
import {TeamDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TeamRepository extends DefaultCrudRepository<
  Team,
  typeof Team.prototype.id
> {
  constructor(
    @inject('datasources.Team') dataSource: TeamDataSource,
  ) {
    super(Team, dataSource);
  }
}
