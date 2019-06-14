import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
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
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
