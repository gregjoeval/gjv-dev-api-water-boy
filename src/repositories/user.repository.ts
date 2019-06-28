import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';
import {UserDataSource} from '../datasources';
import {inject} from '@loopback/core';

export type Credentials = {
  email: string;
  password: string;
};

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(
    @inject('datasources.User') dataSource: UserDataSource,
  ) {
    super(User, dataSource);
  }
}
