import { DefaultCrudRepository } from '@loopback/repository';
import { Person } from '../models';
import { PersonDataSource } from '../datasources';
export declare class PersonRepository extends DefaultCrudRepository<Person, typeof Person.prototype.id> {
    constructor(dataSource: PersonDataSource);
}
