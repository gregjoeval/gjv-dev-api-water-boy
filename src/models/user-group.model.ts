import {Entity, model, property} from '@loopback/repository';
import {v4 as uuid} from 'uuid';

@model({settings: {}})
export class UserGroup extends Entity {
  @property({
    type: 'string',
    id: true
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  memberIds?: string[];


  constructor(data?: Partial<UserGroup>) {
    super(data);
    this.id = uuid()
  }
}

export interface UserGroupRelations {
  // describe navigational properties here
}

export type UserGroupWithRelations = UserGroup & UserGroupRelations;
