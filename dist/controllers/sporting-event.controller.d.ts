import { Count, Filter, Where } from '@loopback/repository';
import { SportingEvent } from '../models';
import { SportingEventRepository } from '../repositories';
export declare class SportingEventController {
    sportingEventRepository: SportingEventRepository;
    constructor(sportingEventRepository: SportingEventRepository);
    create(sportingEvent: SportingEvent): Promise<SportingEvent>;
    count(where?: Where<SportingEvent>): Promise<Count>;
    find(filter?: Filter<SportingEvent>): Promise<SportingEvent[]>;
    updateAll(sportingEvent: SportingEvent, where?: Where<SportingEvent>): Promise<Count>;
    findById(id: string): Promise<SportingEvent>;
    updateById(id: string, sportingEvent: SportingEvent): Promise<void>;
    replaceById(id: string, sportingEvent: SportingEvent): Promise<void>;
    deleteById(id: string): Promise<void>;
}
