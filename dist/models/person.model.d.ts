import { Entity } from '@loopback/repository';
export declare class Person extends Entity {
    id: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    dateOfBirth?: string;
    gender?: string;
    phone?: string;
    email?: string;
    constructor(data?: Partial<Person>);
}
export interface PersonRelations {
}
export declare type PersonWithRelations = Person & PersonRelations;
