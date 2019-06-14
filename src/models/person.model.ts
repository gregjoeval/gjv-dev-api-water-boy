import {Entity, model, property} from '@loopback/repository';
import {v4 as uuid} from 'uuid';

@model({settings: {}})
export class Person extends Entity {
  @property({
    type: 'string',
    id: true
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
  })
  middleName?: string;

  @property({
    type: 'string',
  })
  dateOfBirth?: string;

  @property({
    type: 'string',
  })
  gender?: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  email?: string;


  constructor(data?: Partial<Person>) {
    super(data);
    this.id = uuid();
  }
}

export interface PersonRelations {
  // describe navigational properties here
}

export type PersonWithRelations = Person & PersonRelations;
