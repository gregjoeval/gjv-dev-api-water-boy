import {Entity, model, property} from '@loopback/repository';
import {v4 as uuid} from 'uuid';

@model({settings: {}})
export class User extends Entity {
  @property({
    type: 'string',
    id: true
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  personId: string;

  @property({
    type: 'string',
    required: true,
  })
  userGroupId: string;

  @property({
    type: 'string',
    required: true
  })
  email: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  alias?: string;


  constructor(data?: Partial<User>) {
    super(data);
    this.id = uuid();
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
