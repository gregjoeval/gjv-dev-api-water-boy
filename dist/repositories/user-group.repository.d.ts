import { DefaultCrudRepository } from '@loopback/repository';
import { UserGroup } from '../models';
import { UserGroupDataSource } from '../datasources';
export declare class UserGroupRepository extends DefaultCrudRepository<UserGroup, typeof UserGroup.prototype.id> {
    constructor(dataSource: UserGroupDataSource);
}
