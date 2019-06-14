import {DefaultCrudRepository} from '@loopback/repository';
import {UserGroup} from '../models';
import {UserGroupDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserGroupRepository extends DefaultCrudRepository<
  UserGroup,
  typeof UserGroup.prototype.id
> {
  constructor(
    @inject('datasources.UserGroup') dataSource: UserGroupDataSource,
  ) {
    super(UserGroup, dataSource);
  }
}
