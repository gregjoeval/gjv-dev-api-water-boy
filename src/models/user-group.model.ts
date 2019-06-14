import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class UserGroup extends Entity {
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
  name: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  memberIds?: string[];


  constructor(data?: Partial<UserGroup>) {
    super(data);
  }
}

export interface UserGroupRelations {
  // describe navigational properties here
}

export type UserGroupWithRelations = UserGroup & UserGroupRelations;
