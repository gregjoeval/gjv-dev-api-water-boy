import {DefaultCrudRepository} from '@loopback/repository';
import {Person} from '../models';
import {PersonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonRepository extends DefaultCrudRepository<
  Person,
  typeof Person.prototype.id
> {
  constructor(
    @inject('datasources.person') dataSource: PersonDataSource,
  ) {
    super(Person, dataSource);
  }
}
