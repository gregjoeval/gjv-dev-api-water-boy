import { DefaultCrudRepository } from '@loopback/repository';
import { SportingEvent } from '../models';
import { SportingEventDataSource } from '../datasources';
export declare class SportingEventRepository extends DefaultCrudRepository<SportingEvent, typeof SportingEvent.prototype.id> {
    constructor(dataSource: SportingEventDataSource);
}
