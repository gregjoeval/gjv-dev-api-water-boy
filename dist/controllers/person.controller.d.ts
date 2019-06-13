import { Count, Filter, Where } from '@loopback/repository';
import { Person } from '../models';
import { PersonRepository } from '../repositories';
export declare class PersonController {
    personRepository: PersonRepository;
    constructor(personRepository: PersonRepository);
    create(person: Person): Promise<Person>;
    count(where?: Where<Person>): Promise<Count>;
    find(filter?: Filter<Person>): Promise<Person[]>;
    updateAll(person: Person, where?: Where<Person>): Promise<Count>;
    findById(id: string): Promise<Person>;
    updateById(id: string, person: Person): Promise<void>;
    replaceById(id: string, person: Person): Promise<void>;
    deleteById(id: string): Promise<void>;
}
